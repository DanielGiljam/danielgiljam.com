import {Icon} from "@iconify/react";

import {ReactComponent as LogomarkLarge} from "../../assets/logomark.svg";

export const Index = () => (
    <main className={"flex min-h-[100svh] p-16"}>
        <div className={"m-auto flex flex-col gap-8"}>
            <LogomarkLarge
                aria-hidden={"true"}
                className={"h-full max-h-[320px] w-full max-w-[320px]"}
            />
            <div className={"flex justify-center gap-4"}>
                <a
                    href={"https://linkedin.com/in/danielgiljam"}
                    rel={"noreferrer"}
                    target={"_blank"}
                >
                    <Icon
                        className={"h-8 w-8"}
                        icon={"simple-icons:linkedin"}
                    />
                    <span className={"sr-only"}>LinkedIn</span>
                </a>
                <a
                    href={"https://github.com/danielgiljam"}
                    rel={"noreferrer"}
                    target={"_blank"}
                >
                    <Icon className={"h-8 w-8"} icon={"simple-icons:github"} />
                    <span className={"sr-only"}>GitHub</span>
                </a>
            </div>
        </div>
    </main>
);

export default Index;
