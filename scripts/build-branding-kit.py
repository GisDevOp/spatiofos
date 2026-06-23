#!/usr/bin/env python3
"""Generate SpatioFos branding kit assets from source logo and design tokens."""

from __future__ import annotations

import json
import shutil
import zipfile
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
SOURCE_LOGO = ROOT / "components" / "layout" / "SpatioFos Logo.png"
KIT = ROOT / "branding-kit"
ZIP_OUT = ROOT / "spatiofos-branding-kit.zip"

COLORS = {
    "navy": "#0B1E35",
    "navy_deep": "#071528",
    "navy_mid": "#112540",
    "green": "#3BBF5A",
    "green_dark": "#2A9E47",
    "green_pale": "#E8F7EC",
    "green_mid": "#C5ECD0",
    "white": "#FFFFFF",
    "offwhite": "#F4F7FB",
    "slate": "#4E6880",
    "muted": "#8BA3B8",
    "border_green": "rgba(59, 191, 90, 0.15)",
    "border_navy": "rgba(255, 255, 255, 0.09)",
}


def hex_to_rgb(value: str) -> tuple[int, int, int]:
    value = value.lstrip("#")
    return tuple(int(value[i : i + 2], 16) for i in (0, 2, 4))


def ensure_dirs() -> None:
    for sub in [
        "logos/png",
        "logos/svg",
        "colors",
        "colors/swatches",
        "fonts",
        "templates/letterhead",
        "templates/reports",
        "templates/email",
        "templates/presentations",
        "assets/patterns",
        "copy",
        "contact",
    ]:
        (KIT / sub).mkdir(parents=True, exist_ok=True)


def write_palette_files() -> None:
    palette = {
        "brand": "SpatioFos",
        "tagline": "Spatial Intelligence. Real Impact.",
        "colors": COLORS,
        "typography": {
            "display": {
                "family": "Space Grotesk",
                "google_fonts": "https://fonts.google.com/specimen/Space+Grotesk",
                "weights": [400, 500, 600, 700],
                "usage": "Headlines, logo wordmark, section titles",
            },
            "body": {
                "family": "Inter",
                "google_fonts": "https://fonts.google.com/specimen/Inter",
                "weights": [400, 500, 600],
                "usage": "Body copy, forms, UI labels",
            },
        },
        "radii_px": {"sm": 6, "md": 10, "lg": 14},
        "letter_spacing": {"label": "1.8px", "display_tight": "-0.5px"},
    }
    (KIT / "colors" / "palette.json").write_text(
        json.dumps(palette, indent=2), encoding="utf-8"
    )

    css = ":root {\n"
    for name, value in COLORS.items():
        css += f"  --{name.replace('_', '-')}: {value};\n"
    css += "  --radius-sm: 6px;\n"
    css += "  --radius-md: 10px;\n"
    css += "  --radius-lg: 14px;\n"
    css += "  --font-display: 'Space Grotesk', sans-serif;\n"
    css += "  --font-body: 'Inter', sans-serif;\n"
    css += "}\n"
    (KIT / "colors" / "palette.css").write_text(css, encoding="utf-8")

    scss = "$colors: (\n"
    for name, value in COLORS.items():
        scss += f'  "{name}": {value},\n'
    scss += ");\n"
    (KIT / "colors" / "palette.scss").write_text(scss, encoding="utf-8")


def write_color_swatches() -> None:
    swatch_dir = KIT / "colors" / "swatches"
    for name, hex_val in COLORS.items():
        if hex_val.startswith("rgba"):
            continue
        img = Image.new("RGB", (400, 200), hex_to_rgb(hex_val))
        draw = ImageDraw.Draw(img)
        text_color = (255, 255, 255) if name.startswith("navy") or name == "green_dark" else (11, 30, 53)
        draw.rectangle((0, 140, 400, 200), fill=(255, 255, 255, 30) if False else hex_to_rgb(hex_val))
        draw.text((20, 150), f"{name.replace('_', ' ').title()}", fill=text_color)
        draw.text((20, 170), hex_val.upper(), fill=text_color)
        img.save(swatch_dir / f"swatch_{name}.png")


def fit_on_canvas(img: Image.Image, size: int, bg: tuple[int, int, int, int] | None) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), bg or (0, 0, 0, 0))
    scale = min((size * 0.85) / img.width, (size * 0.85) / img.height)
    w, h = int(img.width * scale), int(img.height * scale)
    resized = img.resize((w, h), Image.Resampling.LANCZOS)
    x = (size - w) // 2
    y = (size - h) // 2
    canvas.paste(resized, (x, y), resized)
    return canvas


def write_logo_variants() -> None:
    logo = Image.open(SOURCE_LOGO).convert("RGBA")
    png_dir = KIT / "logos" / "png"

    shutil.copy2(SOURCE_LOGO, png_dir / "SpatioFos_Logo_Original.png")

    for size in [32, 64, 128, 256, 512, 1024]:
        icon = fit_on_canvas(logo, size, None)
        icon.save(png_dir / f"SpatioFos_Icon_{size}x{size}.png")

    for bg_name, bg_hex in [("Transparent", None), ("On_Navy", "#071528"), ("On_White", "#FFFFFF")]:
        for size in [512, 1024]:
            bg = None if bg_hex is None else (*hex_to_rgb(bg_hex), 255)
            out = fit_on_canvas(logo, size, bg)
            suffix = bg_name.lower()
            out.save(png_dir / f"SpatioFos_Logo_{suffix}_{size}x{size}.png")

    # Horizontal lockup plate (icon + wordmark area) — icon left, text added in SVG templates
    plate_w, plate_h = 1200, 320
    plate = Image.new("RGBA", (plate_w, plate_h), (*hex_to_rgb("#071528"), 255))
    icon_size = 240
    icon = fit_on_canvas(logo, icon_size, None)
    plate.paste(icon, (40, (plate_h - icon_size) // 2), icon)
    plate.save(png_dir / "SpatioFos_Logo_Lockup_Plate_Navy.png")

    plate_light = Image.new("RGBA", (plate_w, plate_h), (*hex_to_rgb("#FFFFFF"), 255))
    plate_light.paste(icon, (40, (plate_h - icon_size) // 2), icon)
    plate_light.save(png_dir / "SpatioFos_Logo_Lockup_Plate_White.png")


def write_svg_wordmarks() -> None:
    svg_dir = KIT / "logos" / "svg"

    def wordmark_svg(fos_color: str, spatio_color: str, width: int = 420, height: int = 80) -> str:
        return f"""<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}" role="img" aria-label="SpatioFos">
  <text x="0" y="58" font-family="'Space Grotesk', Arial, sans-serif" font-size="52" font-weight="700" letter-spacing="-1">
    <tspan fill="{spatio_color}">Spatio</tspan><tspan fill="{fos_color}">Fos</tspan>
  </text>
</svg>
"""

    def horizontal_lockup(bg: str, spatio: str, fos: str) -> str:
        return f"""<svg xmlns="http://www.w3.org/2000/svg" width="640" height="120" viewBox="0 0 640 120" role="img" aria-label="SpatioFos">
  <rect width="640" height="120" fill="{bg}"/>
  <image href="../png/SpatioFos_Icon_256x256.png" x="16" y="16" width="88" height="88"/>
  <text x="120" y="74" font-family="'Space Grotesk', Arial, sans-serif" font-size="44" font-weight="700" letter-spacing="-0.5">
    <tspan fill="{spatio}">Spatio</tspan><tspan fill="{fos}">Fos</tspan>
  </text>
</svg>
"""

    (svg_dir / "SpatioFos_Wordmark_Dark.svg").write_text(
        wordmark_svg("#3BBF5A", "#0B1E35"), encoding="utf-8"
    )
    (svg_dir / "SpatioFos_Wordmark_Light.svg").write_text(
        wordmark_svg("#3BBF5A", "#FFFFFF"), encoding="utf-8"
    )
    (svg_dir / "SpatioFos_Wordmark_On_Green.svg").write_text(
        wordmark_svg("#071528", "#FFFFFF"), encoding="utf-8"
    )
    (svg_dir / "SpatioFos_Lockup_Horizontal_Navy.svg").write_text(
        horizontal_lockup("#071528", "#FFFFFF", "#3BBF5A"), encoding="utf-8"
    )
    (svg_dir / "SpatioFos_Lockup_Horizontal_White.svg").write_text(
        horizontal_lockup("#FFFFFF", "#0B1E35", "#3BBF5A"), encoding="utf-8"
    )

    grid = """<svg xmlns="http://www.w3.org/2000/svg" width="440" height="440" viewBox="0 0 440 440">
  <defs>
    <pattern id="grid" width="44" height="44" patternUnits="userSpaceOnUse">
      <path d="M 44 0 L 0 0 0 44" fill="none" stroke="rgba(59,191,90,0.12)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="440" height="440" fill="#071528"/>
  <rect width="440" height="440" fill="url(#grid)"/>
</svg>
"""
    (KIT / "assets" / "patterns" / "grid-pattern-navy.svg").write_text(grid, encoding="utf-8")


def write_contact_and_copy() -> None:
    contact = {
        "company": "SpatioFos Pty Ltd",
        "location": "Brisbane, Queensland, Australia",
        "website": "https://spatiofos.vercel.app",
        "domain": "spatiofos.com",
        "emails": {
            "bookings": "bookings@spatiofos.com",
            "enterprise": "enterprise@spatiofos.com",
            "hello": "hello@spatiofos.com",
        },
        "product_names": [
            "Roof Intelligence",
            "Aviation Intelligence",
            "Infrastructure Intelligence",
            "Asset Intelligence Platform",
            "SpatioFos Asset Intelligence™",
        ],
        "certifications": [
            "CASA Compliant",
            "RePL Certified",
            "Fully Insured",
            "RTK Enabled",
            "AI-Assisted Analysis",
        ],
    }
    (KIT / "contact" / "contact-details.json").write_text(
        json.dumps(contact, indent=2), encoding="utf-8"
    )


def create_zip() -> None:
    if ZIP_OUT.exists():
        ZIP_OUT.unlink()
    with zipfile.ZipFile(ZIP_OUT, "w", zipfile.ZIP_DEFLATED) as zf:
        for path in sorted(KIT.rglob("*")):
            if path.is_file():
                zf.write(path, path.relative_to(ROOT))


def main() -> None:
    if not SOURCE_LOGO.exists():
        raise SystemExit(f"Source logo not found: {SOURCE_LOGO}")
    ensure_dirs()
    write_palette_files()
    write_color_swatches()
    write_logo_variants()
    write_svg_wordmarks()
    write_contact_and_copy()
    create_zip()
    print(f"Branding kit written to: {KIT}")
    print(f"Zip archive created: {ZIP_OUT}")


if __name__ == "__main__":
    main()
