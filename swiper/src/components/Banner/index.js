import React from "react";
import PropTypes from "prop-types";
import "../../static/css/index.css";

export default class Banner extends React.Component {
  // 设置属性的默认值和规则
  static defaultProps = {
    data: [],
    interval: 3000,
    step: 1,
    speed: 300
  };
  static propTypes = {
    data: PropTypes.array,
    interval: PropTypes.number,
    step: PropTypes.number,
    speed: PropTypes.number
  };

  constructor(props) {
    super(props);
    // init state
    let { step, speed } = this.props;
    this.state = {
      step,
      speed
    };
  }

  // 数据的克隆
  componentWillMount() {
    let { data } = this.props;

    // 克隆数据
    let cloneData = data.slice(0);

    // 复制第一个放入最后
    cloneData.push(data[0]);

    // 赋值最后一个放入最前
    cloneData.unshift(data[data.length - 1]);

    // 挂载到实例上供其它方法调用
    this.cloneData = cloneData;
  }

  componentWillUpdate(nextProps, nextState) {
    // 边界判断：如果最新修改的STEP索引大于最大索引（说明此时已经是末尾了，不能在向后走了），我们让其立即回到（无动画）索引为1的位置
    if (nextState.step > this.cloneData.length - 1) {
      this.setState({
        step: 1,
        speed: 0
      });
    }
    // 向左边界判断：如果当前最新修改的索引已经小于零，不能继续向左走了，让其立即回到倒数第二张图片位置（真实的最后一张图片）step=clone-data.length-2
    if (nextState.step < 0) {
      this.setState({
        step: this.cloneData.length - 2,
        speed: 0
      });
    }
  }

  // 自动轮播
  componentDidMount() {
    // 把定时器返回值挂载到实例上，方便后期清除：结束自动轮播
    this.autoTimer = setInterval(this.autoMove, this.props.interval);
  }

  componentDidUpdate() {
    // 只有是从克隆的第一张立即切换到真实第一张后，我们才做如下处理：让其从当前第一张运动到第二张即可
    let { step, speed } = this.state;
    if (step === 1 && speed === 0) {
      // 为啥要设置定时器延迟：CSS3的TRASITION有一个问题（主栈执行的时候，短时间内遇到两次设置TRANSITION-DRRATION的代码，以最后一次设置的为主）
      let delayTimer = setTimeout(() => {
        clearTimeout(delayTimer);
        this.setState({
          step: step + 1, //2
          speed: this.props.speed
        });
      }, 0);
    }

    // 向左边界判断：立即回到倒数第二张后，让其向回在运动一张
    if (step === this.cloneData.length - 2 && speed === 0) {
      let delayTimer = setTimeout(() => {
        clearTimeout(delayTimer);
        this.setState({
          step: step - 1,
          speed: this.props.speed
        });
      }, 0);
    }

    // 切换完成
    // this.isRun = false;
  }

  render() {
    // 焦点对象
    let { data } = this.props;

    // 波轮播图片对象
    let { cloneData } = this;

    // 没有数据返回空
    if (data.length === 0) return "";

    // 控制WRAPPER的样式
    let { step, speed } = this.state,
      wrapperSty = {
        width: cloneData.length * 1000 + "px", // 所有克隆对象宽度
        left: -step * 1000 + "px", // -1000px 第一张
        transition: `left ${speed}ms linear 0ms`
      };

    return (
      <section
        className="container"
        onMouseEnter={this.movePause}
        onMouseLeave={this.movePlay}
        onClick={this.handleClick}
      >
        <ul
          className="wrapper"
          style={wrapperSty}
          onTransitionEnd={() => {
            // wrapper切换动画完成，再去执行下一次切换任务
            this.isRun = false;
          }}
        >
          {cloneData.map((item, index) => {
            let { title, pic } = item;
            return (
              <li key={index}>
                <img src={pic} alt={title} />
              </li>
            );
          })}
        </ul>
        <ul className="focus">
          {data.map((item, index) => {
            // 焦点图片：图片索引减去1就是焦点选中项对应的索引（特殊的：如果图片索引是零，让最后一个焦点选中，如果图片索引是最大，让第一个焦点选中）

            // 焦点索引等于图片索引-1
            let focusIndex = step - 1;

            // 图片索引第一个，焦点图片最后一个
            focusIndex = step === 0 ? data.length - 1 : focusIndex;

            // 图片索引最大，焦点图片为第一个
            focusIndex = step === cloneData.length - 1 ? 0 : focusIndex;
            return (
              <li
                className={focusIndex === index ? "active" : ""}
                key={index}
              />
            );
          })}
        </ul>
        <a href="javascript:;" className="arrow arrowLeft">
          &nbsp;
        </a>
        <a href="javascript:;" className="arrow arrowRight">
          &nbsp;
        </a>
      </section>
    );
  }

  // 向右切换
  autoMove = () => {
    this.setState({
      step: this.state.step + 1
    });
  };

  // 自动轮播的暂停和开启
  movePause = () => {
    clearInterval(this.autoTimer);
  };
  movePlay = () => {
    this.autoTimer = setInterval(this.autoMove, this.props.interval);
  };

  // 事件委托
  handleClick = e => {
    let target = e.target,
      tarTag = target.tagName,
      tarClass = target.className;
    // 左右切换按钮流
    if (tarTag === "A" && /(^| +)arrow( +|$)/.test(tarClass)) {
      // 防止过快点击
      if (this.isRun) return;
      this.isRun = true;

      // right
      if (tarClass.indexOf("arrowRight") >= 0) {
        this.autoMove();
        return;
      }
      // left
      this.setState({
        step: this.state.step - 1
      });
      return;
    }
  };
}
