export default function HeaderItem({ title, Icon }) {
    return (
        <div className="group flex flex-col items-center w-12 cursor-pointer sm:w-20 hover:text-white active:text-red-500">
            <Icon className="h-8 mb-1 group-hover:animate-bounce" />
            <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
        </div>
    )
};
