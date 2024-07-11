import Color from "./Color";

const ColorTest = () => {
    return (
        <>
            <div className="mb-2 font-title">Primary</div>
            <div className="flex mb-8">
                <Color color="bg-primary" text="Primary" />
                <Color color="bg-primary-dark" text="Primary-dark" type="white" />
            </div>
            <div className="mb-2 font-title">Grayscale</div>
            <div className="flex mb-8">
                <Color color="bg-white" text="white" />
                <Color color="bg-gray-200" text="200" />
                <Color color="bg-gray-400" text="400" type="white" />
                <Color color="bg-gray-600" text="600" type="white" />
                <Color color="bg-gray-800" text="800" type="white" />
            </div>
            <div className="mb-2 font-title">Literal</div>
            <div className="flex mb-8">
                <Color color="bg-literal-error" text="Error" type="white" />
                <Color color="bg-literal-angry" text="Angry" type="white" />
                <Color color="bg-literal-joy" text="Joy" type="white" />
                <Color color="bg-literal-happy" text="Happy" type="white" />
                <Color color="bg-literal-sorrow" text="Sorrow" type="white" />
            </div>

            <div className=""></div>
        </>
    );
};

export default ColorTest;
