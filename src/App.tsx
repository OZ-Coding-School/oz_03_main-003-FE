import ButtonDefault from "./components/button/ButtonDefault";
import ButtonDisable from "./components/button/ButtonDisable";

function App() {
    return (
        <div className="font-body flex gap-4 p-10 bg-black w-full h-[100vh]">
            <ButtonDisable>감정 나무</ButtonDisable>
            <ButtonDefault>감정 나무</ButtonDefault>
        </div>
    );
}
export default App;
