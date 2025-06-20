type ParsedOKLCH = {
  l: number;
  c: number;
  h: number;
};

type RGB = {
  r: number;
  g: number;
  b: number;
};

const parseOKLCH = (oklchString: string): ParsedOKLCH => {
  const match = oklchString.match(
    /oklch\(\s*([0-9.]+)\s+([0-9.]+)\s+([0-9.]+)\s*\)/,
  );
  if (!match) return { l: 0.5, c: 0.1, h: 0 };
  return {
    l: parseFloat(match[1]),
    c: parseFloat(match[2]),
    h: parseFloat(match[3]),
  };
};

/**
 * Convert OKLCH to RGB using proper color space conversion
 * This is a simplified conversion that approximates the OKLCH color space
 */
const oklchToRgb = (l: number, c: number, h: number): RGB => {
  // Convert hue to radians
  const hRad = (h * Math.PI) / 180;

  // Convert OKLCH to approximate RGB
  // This is a simplified conversion - for production use, consider a proper color library
  const a = c * Math.cos(hRad);
  const b = c * Math.sin(hRad);

  // Approximate conversion from OKLab to RGB
  const l_ = l + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = l - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = l - 0.0894841775 * a - 1.291485548 * b;

  const l3 = l_ * l_ * l_;
  const m3 = m_ * m_ * m_;
  const s3 = s_ * s_ * s_;

  const r = +4.0767416621 * l3 - 3.3077115913 * m3 + 0.2309699292 * s3;
  const g = -1.2684380046 * l3 + 2.6097574011 * m3 - 0.3413193965 * s3;
  const b_ = -0.0041960863 * l3 - 0.7034186147 * m3 + 1.707614701 * s3;

  // Clamp and convert to 0-255 range
  return {
    r: Math.max(0, Math.min(255, Math.round(r * 255))),
    g: Math.max(0, Math.min(255, Math.round(g * 255))),
    b: Math.max(0, Math.min(255, Math.round(b_ * 255))),
  };
};

const oklchToHex = (oklchString: string): string => {
  const { l, c, h } = parseOKLCH(oklchString);
  const { r, g, b } = oklchToRgb(l, c, h);
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
};

const oklchToRgbString = (oklchString: string): string => {
  const { l, c, h } = parseOKLCH(oklchString);
  const { r, g, b } = oklchToRgb(l, c, h);
  return `rgb(${r}, ${g}, ${b})`;
};

const oklchToHslString = (oklchString: string): string => {
  const { l, c, h } = parseOKLCH(oklchString);
  const { r, g, b } = oklchToRgb(l, c, h);

  // Convert RGB to HSL
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;

  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  const diff = max - min;

  let hue = 0;
  let saturation = 0;
  const lightness = (max + min) / 2;

  if (diff !== 0) {
    saturation = lightness > 0.5 ? diff / (2 - max - min) : diff / (max + min);

    switch (max) {
      case rNorm:
        hue = ((gNorm - bNorm) / diff + (gNorm < bNorm ? 6 : 0)) / 6;
        break;
      case gNorm:
        hue = ((bNorm - rNorm) / diff + 2) / 6;
        break;
      case bNorm:
        hue = ((rNorm - gNorm) / diff + 4) / 6;
        break;
    }
  }

  return `hsl(${Math.round(hue * 360)}, ${Math.round(saturation * 100)}%, ${Math.round(lightness * 100)}%)`;
};

export const convertColorFormat = (
  oklchValue: string,
  format: "oklch" | "hex" | "rgb" | "hsl",
): string => {
  switch (format) {
    case "hex":
      return oklchToHex(oklchValue);
    case "rgb":
      return oklchToRgbString(oklchValue);
    case "hsl":
      return oklchToHslString(oklchValue);
    default:
      return oklchValue;
  }
};

export const toggleNextColorFormat = (
  currentFormat: "oklch" | "hex" | "rgb" | "hsl",
): "oklch" | "hex" | "rgb" | "hsl" => {
  const formats: Array<"oklch" | "hex" | "rgb" | "hsl"> = [
    "oklch",
    "hex",
    "rgb",
    "hsl",
  ];
  const currentIndex = formats.indexOf(currentFormat);
  const nextIndex = (currentIndex + 1) % formats.length;
  return formats[nextIndex];
};
