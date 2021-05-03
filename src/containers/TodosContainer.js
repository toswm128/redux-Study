import React, { Component } from "react";
import Counter from "../components/Counter";
import { connect } from "react-redux";
import * as counterActions from "../store/modules/counter";

class CounterContainer extends Component {
  handleIncrement = () => {
    this.props.increment();
    console.log(this.props);
  };

  handleDecrement = () => {
    this.props.decrement();
  };

  handleTest = () => {
    this.props.test();
  };

  render() {
    const { handleIncrement, handleDecrement, handleTest } = this;
    const { number, testS } = this.props;
    console.log(this);

    return (
      <Counter
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onTest={handleTest}
        number={number}
        String={testS}
      />
    );
  }
}

// props 값으로 넣어 줄 상태를 정의해줍니다.
const mapStateToProps = state => (
  console.log(state),
  {
    number: state.counter.number,
    testS: state.counter.testS,
  }
);

// props 값으로 넣어 줄 액션 함수들을 정의해줍니다
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(counterActions.increment()),
  decrement: () => dispatch(counterActions.decrement()),
  test: () => dispatch(counterActions.test()),
});

// 컴포넌트를 리덕스와 연동 할 떄에는 connect 를 사용합니다.
// connect() 의 결과는, 컴포넌트에 props 를 넣어주는 함수를 반환합니다.
// 반환된 함수에 우리가 만든 컴포넌트를 넣어주면 됩니다.
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
