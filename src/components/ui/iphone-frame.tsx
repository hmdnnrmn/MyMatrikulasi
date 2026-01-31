export function IPhoneFrame({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-[2.5rem] h-[500px] w-[260px] shadow-xl shrink-0 overflow-hidden">
            {/* Side buttons */}
            <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[11px] top-[72px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[11px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[11px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[11px] top-[142px] rounded-e-lg"></div>

            {/* Screen content - fills entire area */}
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-black relative">
                {children}
            </div>
        </div>
    );
}
