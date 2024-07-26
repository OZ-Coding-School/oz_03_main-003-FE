import { useCallback, useState } from "react";
import AdminCarousel from "./AdminCarousel";
import { twMerge as tw } from "tailwind-merge";
import { FormData } from "../../config/types";

interface AdminOverViewProps {
    data: FormData;
}
const AdminOverview = ({ data }: AdminOverViewProps) => {
    const [carousel, setCarousel] = useState(0);

    const downHandler = () => {
        if (carousel === 0) {
            setCarousel(2);
        } else {
            setCarousel((prev) => prev - 1);
        }
    };

    const upHandler = useCallback(() => {
        if (carousel === 2) {
            setCarousel(0);
        } else {
            setCarousel((prev) => prev + 1);
        }
    }, [carousel]);

    return (
        <>
            <div className="text-2xl select-none font-mono font-bold">
                <div>Overview</div>
                <div
                    tabIndex={-1}
                    onKeyDown={(e) => {
                        if (e.key === "ArrowLeft") downHandler();
                        if (e.key === "ArrowRight") upHandler();
                    }}
                    className="outline-none w-full h-fit px-10 py-5 rounded-md bg-white"
                >
                    <div className="flex justify-center gap-10 items-center">
                        <button onClick={downHandler} className="p-1 rounded-full bg-slate-200">
                            {"<"}
                        </button>
                        <div className="w-[400px]">
                            <AdminCarousel data={data} carousel={carousel} />
                        </div>
                        <button onClick={upHandler} className="p-1 rounded-full bg-slate-200">
                            {">"}
                        </button>
                    </div>
                    <div className="flex justify-center text-3xl">
                        <span
                            onClick={() => setCarousel(2)}
                            className={tw(carousel === 2 && "text-indigo-400", "cursor-pointer")}
                        >
                            .
                        </span>
                        <span
                            onClick={() => setCarousel(0)}
                            className={tw(carousel === 0 && "text-indigo-400", "cursor-pointer")}
                        >
                            .
                        </span>
                        <span
                            onClick={() => setCarousel(1)}
                            className={tw(carousel === 1 && "text-indigo-400", "cursor-pointer")}
                        >
                            .
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminOverview;
