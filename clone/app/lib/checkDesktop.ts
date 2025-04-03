export default function checkDesktop(breakpoint: string) {
  return breakpoint !== "xxs" && breakpoint !== "xs" && breakpoint !== "sm";
}
