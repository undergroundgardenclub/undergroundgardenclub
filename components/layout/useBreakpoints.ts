import { createBreakpoint } from "react-use";

// HACK: well, not a hack but kinda jank way to do sidebar action vs routing
export const mobileBreakpoint = createBreakpoint({
  mobile: 720,
  notMobile: 721,
});
