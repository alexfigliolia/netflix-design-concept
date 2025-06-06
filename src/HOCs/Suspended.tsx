import { ComponentType, FC, Suspense } from "react";

export const Suspended = <T extends Record<string, any>>(
  ExtendedComponent: ComponentType<T>,
) => {
  const SuspendedComponent: FC<T> = (props: T) => {
    return (
      <Suspense>
        <ExtendedComponent {...props} />
      </Suspense>
    );
  };
  SuspendedComponent.displayName = ExtendedComponent.displayName;
  return SuspendedComponent;
};
