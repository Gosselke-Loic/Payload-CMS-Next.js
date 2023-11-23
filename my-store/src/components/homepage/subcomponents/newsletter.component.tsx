import { Grid } from "@mantine/core";
import { NewsLetter } from "@/shared";

type Props = {
    data: NewsLetter
}
export default function NewsLetterComponent({data}: Props) {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-20">
            <Grid>
                <Grid.Col sm={12} lg={7} className="flex justify-center sm:ml-4">
                    <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl max-sm:hidden">
                        {data.title}
                        <br/>
                        Sign up here
                    </h2>
                    <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl max-sm:block hidden">
                        {data.shortTitle}
                    </h2>
                </Grid.Col>
                <Grid.Col sm={12} lg={4} className="mt-2 md:mt-4">
                    <Grid className="gap-x-4">
                        <Grid.Col className="flex justify-center sm:mb-2 pb-0">
                            <label htmlFor="email-address" className="sr-only">
                                {data.EmailInput.label}
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="min-w-0 w-80 rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 max-sm:w-64"
                                placeholder={data.EmailInput.placeholder}
                            />
                            <button
                                type="submit"
                                className="ml-2 rounded-md bg-indigo-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                {data.buttonLabel}
                            </button>
                        </Grid.Col>
                        <Grid.Col className="pt-0 pl-4 flex justify-center max-sm:mt-2">
                            <span className="text-white text-xs">
                                {data.EmailInput.InputHelper}
                            </span>
                        </Grid.Col>
                    </Grid>
                </Grid.Col>  
            </Grid>
            <svg
                className="absolute top-0 left-1/2 -z-10 h-[42.375rem] -translate-x-1/2 blur-3xl xl:-top-6"
                viewBox="0 0 1155 678"
                fill="none"
            >
            <path
                fill="url(#09dbde42-e95c-4b47-a4d6-0c523c2fca9a)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
                <defs>
                    <linearGradient
                        id="09dbde42-e95c-4b47-a4d6-0c523c2fca9a"
                        x1="1155.49"
                        x2="-78.208"
                        y1=".177"
                        y2="474.645"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#9089FC" />
                        <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}