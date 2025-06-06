export class Content {
  public static parseRuntime(time: number) {
    const [hours, fraction] = (time / 60).toFixed(2).split(".");
    const minutes = Math.ceil((Number(fraction) * 60) / 100);
    if (hours === "0") {
      return `${minutes}m`;
    }
    return `${hours}h ${minutes}m`;
  }
}
