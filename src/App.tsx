import ColorTest from "./ColorTest";
import { LogoSymbol } from "./IconData";

function App() {
    return (
        <div className="font-body p-10 bg-gray-50 w-full h-[100vh]">
            <LogoSymbol className="w-[30px] h-[32px]" />
            <ColorTest />
        </div>
    );
}

export default App;
