interface AvatarBannerProps {
    recordCount: number;
}

export function AvatarBanner({ recordCount }: AvatarBannerProps) {
        return (
            <div className="flex items-center bg-white rounded-full shadow-lg p-2 justify-center">
                <div className="flex -space-x-3">
                    <img
                        src="/Ander.svg"
                        alt="Avatar"
                        className="w-[38px] h-[38px] rounded-full"
                    />
                    <img
                        src="/Bartender.svg"
                        alt="Avatar"
                        className="w-[38px] h-[38px] rounded-full"
                    />
                    <img
                        src="/Bill.svg"
                        alt="Avatar"
                        className="w-[38px] h-[38px] rounded-full"
                    />
                    <img
                        src="/Blink.svg"
                        alt="Avatar"
                        className="w-[38px] h-[38px] rounded-full"
                    />
                    <img
                        src="/Big Bird.svg"
                        alt="Avatar"
                        className="w-[38px] h-[38px] rounded-full"
                    />
                </div>
                <span className="ml-4 text-xl font-medium">+ {recordCount} записей</span>
            </div>
        )
}
