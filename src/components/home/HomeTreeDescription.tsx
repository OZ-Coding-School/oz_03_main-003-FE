interface HomeTreeDescription {
    treeName: string;
    treeType: {
        name: string;
        style: string;
    };
}

const HomeTreeDescription = ({ treeName, treeType }: HomeTreeDescription) => {
    return (
        <div className="absolute text-lg flex flex-col items-center -top-10">
            <div className={treeType.style}>{treeType.name}</div>
            <div className="text-xl">{treeName}</div>
        </div>
    );
};

export default HomeTreeDescription;
