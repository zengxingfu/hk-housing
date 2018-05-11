let switchPath = {
  isFirst(vm) {
    if (vm.$route.path === "/") {
      return true;
    }
    return false;
  },
  isLast(vm) {
    if (vm.$route.path === "/live") {
      return true;
    }
    return false;
  },
  lastPath(vm) {
    let current = vm.$route.path;
    if (current === "/") {
      return null;
    } else if (current === "/policy") {
      return "/";
    } else if (current === "/attention") {
      return "/policy";
    } else {
      return "/attention";
    }
  },
  nextPath(vm) {
    let current = vm.$route.path;
    if (current === "/") {
      return "/policy";
    } else if (current === "/policy") {
      return "/attention";
    } else if (current === "/attention") {
      return "/live";
    } else {
      return null;
    }
  }
};

export default switchPath;
