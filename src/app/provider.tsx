"use client";

import { ProgressProvider } from "@bprogress/next/app";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ProgressProvider height="6px" color="#d12128" options={{ showSpinner: true }} shallowRouting>
            {children}
        </ProgressProvider>
    );
};

export default Providers;
