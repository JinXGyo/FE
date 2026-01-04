type PageHeaderProps = {
    title: string;
    description: string;
    icon?: string;
    iconAlt?: string;
}

export function PageHeader({ title, description, icon, iconAlt = "" }: PageHeaderProps) {
    return (
        <div>
            <div className="flex flex-row items-center gap-2">
                {icon && <img src={icon} alt={iconAlt} />}
                <h1 className="font-playfair text-lg text-[#2A2418]">
                    {title}
                </h1>
            </div>
            {description && (
                <p className="text-lg font-inter text-sm text-[#6B5D4F]">
                    {description}
                </p>
            )}
        </div>
    )
}

