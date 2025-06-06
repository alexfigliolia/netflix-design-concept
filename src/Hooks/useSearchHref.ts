import { usePathname, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { Routing } from "Tools/Routing";

export const useSearchHref = (key: string, value: string) => {
  const pathname = usePathname();
  const params = useSearchParams();

  return useMemo(() => {
    const nextParams = new URLSearchParams(params);
    nextParams.set(key, value);
    return Routing.buildSearchPath(pathname, nextParams);
  }, [params, pathname, key, value]);
};
