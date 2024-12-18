import {ReactComponent as LogomarkLarge} from "../../assets/logomark.svg";

export const Index = () => (
    <div className={"flex min-h-[100svh]"}>
        <div
            className={
                "m-auto flex flex-col items-center gap-[min(3.2vmin,_32px)] overflow-hidden"
            }
        >
            <LogomarkLarge
                aria-hidden={"true"}
                className={"h-[min(32vmin,_320px)] w-[min(32vmin,_320px)]"}
                role={"img"}
            />
            <h1
                className={
                    "relative end-[-0.1em] text-nowrap text-center text-[min(6vmin,_48px)] uppercase tracking-[0.2em]"
                }
            >
                Daniel Giljam
            </h1>
            <ul className={"flex gap-[min(6.4vmin,_16px)]"}>
                <li>
                    <a
                        href={"https://linkedin.com/in/danielgiljam"}
                        rel={"noreferrer"}
                        target={"_blank"}
                    >
                        <span
                            aria-hidden={"true"}
                            className={
                                "iconify simple-icons--linkedin h-[min(9.6vmin,_32px)] w-[min(9.6vmin,_32px)]"
                            }
                            role={"img"}
                        />
                        <span className={"sr-only"}>LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a
                        href={"https://github.com/danielgiljam"}
                        rel={"noreferrer"}
                        target={"_blank"}
                    >
                        <span
                            aria-hidden={"true"}
                            className={
                                "iconify simple-icons--github h-[min(9.6vmin,_32px)] w-[min(9.6vmin,_32px)]"
                            }
                            role={"img"}
                        />
                        <span className={"sr-only"}>GitHub</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
);

export default Index;
