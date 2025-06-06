import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import { Routing } from "Tools/Routing";

export const useSearchParamsBuilder = () => {
  const navigate = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const appendParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(key, value);
      navigate.push(Routing.buildSearchPath(pathname, params), {
        scroll: false,
      });
    },
    [searchParams, navigate, pathname],
  );

  const deleteParam = useCallback(
    (key: string) => {
      const params = new URLSearchParams(searchParams);
      params.delete(key);
      navigate.push(Routing.buildSearchPath(pathname, params), {
        scroll: false,
      });
    },
    [searchParams, navigate, pathname],
  );

  return useMemo(
    () => ({ appendParam, deleteParam }),
    [appendParam, deleteParam],
  );
};
