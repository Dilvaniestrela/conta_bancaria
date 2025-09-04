class Colors {
  static reset = "\x1b[0m";
  static bright = "\x1b[1m";
  static fgGreen = "\x1b[32m";
  static fgRed = "\x1b[31m";
  static fgBlue = "\x1b[34m";
  static fgYellow = "\x1b[33m";

  static green(text) {
    return `${this.fgGreen}${text}${this.reset}`;
  }

  static red(text) {
    return `${this.fgRed}${text}${this.reset}`;
  }

  static blue(text) {
    return `${this.fgBlue}${text}${this.reset}`;
  }

  static yellow(text) {
    return `${this.fgYellow}${text}${this.reset}`;
  }
}

module.exports = Colors;
