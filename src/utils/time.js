export const getTimeStamp = (date = new Date()) => Math.floor(Number(date) / 1000);

export function formatTime(date, fmtString) {
    const formatNumber = (n) => {
        const s = String(n);
        return s.length > 1 ? s : `0${s}`;
    };
    const map = {
        YYYY: date.getFullYear(),
        MM: date.getMonth() + 1,
        DD: date.getDate(),
        HH: date.getHours(),
        mm: date.getMinutes(),
        ss: date.getSeconds(),
        SSS: date.getMilliseconds(),
    };
    let ret = fmtString;
    const keys = Object.keys(map);
    keys.forEach((key) => {
        ret = ret.replace(new RegExp(key, 'g'), formatNumber(map));
    });
    return ret;
}

export const serializeTimeStamp = (secondTimestamp) => {
    return formatTime(new Date(secondTimestamp * 1000), 'YYYY.MM.DD');
};

export const serializeTimeOfChinese = (secondTimestamp) => {
    console.log(secondTimestamp, 'secondTimestamp');
    return formatTime(new Date(secondTimestamp * 1000), 'YYYY年MM月DD日');
};

// export const debounce = (fn,timerDelay,immediate) => { 
//     let timer;
//     return function () {
//         let that = this;
//         let args = arguments;
  
//         if (timer) clearTimeout(timer);
//         if (immediate) {
//             var callNow = !timer;
//             timer = setTimeout(() => {
//               timer = null;
//             }, timerDelay)
//             if (callNow) fn.apply(that, args)
//         }
//         else {
//           timer = setTimeout(function(){
//             fn.apply(that, args)
//             }, timerDelay);
//         }
//     }
// };
 
// export const throttle= (fn, threshhold = 200) => {
//     let timeout;
//     // 计算开始时间
//     let start = new Date();
//     return function () {
//       // 触发时间
//       const current = new Date() - 0;
//       timeout && clearTimeout(timeout);
//       // 如果到了时间间隔点，就执行一次回调
//       if (current - start >= threshhold) {
//         fn( );
//         // 更新开始时间
//         start = current;
//       } else {
//         // 保证方法在脱离事件以后还会执行一次
//         timeout = setTimeout(()=>{
//         fn();
//         }, threshhold );
//       }
//     }
//   }

// export const throttle= (fn, threshhold = 2000) => {
//     // let timeout;
//     // 计算开始时间
//     let start = new Date();
//     return function () {
//       // 触发时间
//       const current = new Date() - 0;
//     //   timeout && clearTimeout(timeout);
//       // 如果到了时间间隔点，就执行一次回调
//       if (current - start >= threshhold) {
//         fn();
//         // 更新开始时间
//         start = current;
//       }
//     }
//   }

export const debounce = (fn, wait) => {
    let timer;
    return function() {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(()=> {
            fn();
        }, wait)
    }
    
}

export const throttle = (fn, threshhold) => {
    let start = new Date();
    return function() {
        let now = new Date() - 0 ;
        if (now - start >= threshhold) {
            fn();
            start = now;
        }
    }
}