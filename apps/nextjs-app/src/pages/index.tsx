import {ReactComponent as LogomarkLarge} from "../../assets/logomark.svg";

export const Index = () => (
    <main className={"flex min-h-[100svh] p-16"}>
        <div className={"m-auto flex flex-col gap-8"}>
            <LogomarkLarge
                aria-hidden={"true"}
                className={"h-full max-h-[320px] w-full max-w-[320px]"}
                role={"img"}
            />
            <div className={"flex justify-center gap-4"}>
                <a
                    href={"https://linkedin.com/in/danielgiljam"}
                    rel={"noreferrer"}
                    target={"_blank"}
                >
                    <span
                        aria-hidden={"true"}
                        className={"iconify simple-icons--linkedin h-8 w-8"}
                        role={"img"}
                    />
                    <span className={"sr-only"}>LinkedIn</span>
                </a>
                <a
                    href={"https://github.com/danielgiljam"}
                    rel={"noreferrer"}
                    target={"_blank"}
                >
                    <span
                        aria-hidden={"true"}
                        className={"iconify simple-icons--github h-8 w-8"}
                        role={"img"}
                    />
                    <span className={"sr-only"}>GitHub</span>
                </a>
            </div>
        </div>
    </main>
);

export default Index;
