
type Props= {
    children: React.ReactNode;
}

export const Htext = ({children}: Props) => {
    return (
        <div>
        <h1 className="basis-3/5 font-montserrat text-3xl font-bold">{children}</h1>
    </div>
    )
}