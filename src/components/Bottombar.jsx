import "./Bottombar.css";


export const Bottombar = () => {
    return (
        <div className="bottom">
            <div className="bottm-btn">
                <p className="bg-circle-white">A</p>
                <p>詳細を見る</p>
            </div>

            <div className="bottm-btn">
                <p className="bg-circle-white">X</p>
                <p>生息地</p>
            </div>

            <div className="bottm-btn">
                <p className="bg-circle-white">Y</p>
                <p>並び替え</p>
            </div>

            <div className="bottm-btn">
                <p className="bg-circle-white">+</p>
                <p>進化</p>
            </div>

            <div className="bottm-btn">
                <p className="bg-circle-white">B</p>
                <p>戻る</p>
            </div>
        </div>
    )
}