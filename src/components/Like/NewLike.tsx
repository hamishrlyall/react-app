import { Component, useState } from "react";

export default class LikeButton extends Component {
  render() {
    const [count, setCount] = useState(0);
    let counter = 100;

    return (
      <>
        <div className="flexbox-container">
          <button
            className="like-button liked"
            onClick={() => setCount((count) => count + 1)}
          >
            Like <span className="likes-counter">| {counter}</span>
          </button>
        </div>
        <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                   .flexbox-container {
                        display: flex;
                        flex-direction: row;
                    }
                `}</style>
      </>
    );
  }
}
