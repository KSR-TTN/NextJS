'use client'
import { createContext, useState, ReactNode } from "react";

interface LoaderContextType {
    loader: boolean;
    setLoader: (value: boolean) => void;
}

const LoaderContext = createContext<LoaderContextType | undefined >(undefined);

interface LoaderProviderProps {
    children: ReactNode;
}

const LoaderProvider = ({ children }: LoaderProviderProps) => {
    const [loader, setLoader] = useState(true);

    return (
        <LoaderContext.Provider value={{ loader, setLoader }}>
            {children}
        </LoaderContext.Provider>
    );
};

export { LoaderContext, LoaderProvider };
