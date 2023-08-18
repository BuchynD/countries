import React from "react";

// prettier-ignore
export default function CountryGrid({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-cols-3 gap-4">
            {children}
        </div>
    );
}
