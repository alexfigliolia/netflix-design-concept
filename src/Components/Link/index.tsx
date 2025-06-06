"use client";
import { default as NextLink, LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes, useMemo } from "react";
import { useClassNames } from "@figliolia/classnames";

export const Link = ({ className, href, ...rest }: Props) => {
  const pathName = usePathname();
  const active = useMemo(
    () => (pathName === "/" ? href === pathName : pathName.startsWith(href)),
    [pathName, href],
  );
  const classNames = useClassNames(className, { active });
  return <NextLink href={href} className={classNames} {...rest} />;
};

interface Props
  extends Omit<LinkProps, "href">,
    AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}
