interface HomeTreeDescription {
    treeName: string;
    treeType: {
        name: string;
        style: string;
    };
}

const HomeTreeDescription = ({ treeName, treeType }: HomeTreeDescription) => {
    return (
        <div className="absolute select-none flex flex-col items-center top-10">
            <p className={treeType.style}>{treeType.name}</p>
            <p className="text-base w-40 text-center">{treeName}</p>
        </div>
    );
};

export default HomeTreeDescription;
