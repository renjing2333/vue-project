<template>
    <div>
        <h1>practice</h1>
        <button @click="hh">哈哈哈</button>
        <div ref="testDom">88888</div>
        <button @click="getDom">获取节点</button>
    </div>
</template>

<script>
    export default {
        created() {

            // var arr2 = [
            //     {56: 111},
            //     {23: 222},
            //     {59: 333},
            //     {25: 444},
            //     {37: 555}
            // ]
            // for(var i = 0; i < arr2.length; i++) {
            //     // 循环遍历数组
            //     for(var key in arr2[i]) {
            //         // 取数组每一项的key属性的value
            //         console.log(arr2[i][key], 'arr2[i][key]');
            //     }
            // }

            var arraySalary = [
                [
                    {salary01: 1},
                    {salary02: 2},
                    {salary03: 3},
                    {salary04: 4},
                    {salary05: 5}
                ],
                [
                    {salary001: 11},
                    {salary002: 22},
                    {salary003: 33},
                    {salary004: 44},
                    {salary005: 55}
                ],
                [
                    {salary111: 111},
                    {salary222: 222},
                    {salary333: 333},
                    {salary444: 444},
                    {salary555: 555},
                    {salary666: 666}
                ]
            ]

            function salaryNum(arrBig, m, n) {
                var totalArr =[];
                    for(var x = 0; x < m ; x++) {
                    // 循环大数组的前x项
                    // console.log(arrBig[x]);
                    for(var i = 0; i < n; i++) {
                        // 循环小数组的前i项
                        // console.log(arrBig[x][i]);
                        for(var key in arrBig[x][i]) {
                            // console.log(arrBig[x][i][key]);
                            totalArr.push(arrBig[x][i][key]);
                        }
                    }
                }
                return totalArr;
            }
            salaryNum(arraySalary, 3, 3)
            console.log(eval(salaryNum(arraySalary, 3, 3).join('+')));
            

            // for(var x = 0; x < arrBig.length ; x++) {
            //     // 循环大数组的前x项
            //     // console.log(arrBig[x]);
            //     for(var i = 0; i < arrBig[x].length; i++) {
            //         // 循环小数组的前i项
            //         // console.log(arrBig[x][i]);
            //         for(var key in arrBig[x][i]) {
            //             console.log(arrBig[x][i][key]);
            //         }
            //     }
            // }

        },
        methods: {
            hh() {
                var arr1 = [{flag: false},{flag: true},{flag: false},{flag: true},{flag: false},{flag: false}]
                arr1.reverse();
                var res = arr1.findIndex(function(el){
                    return el.flag === true;
                });
                console.log(res); // 打印出来是2
                console.log(arr1.length - res -1); // 这是你要取的正确的值
            },
            getDom() {
                console.log(this.$refs.testDom, '打印testDom');
            }
        }
    }
</script>

<style>
.content p:nth-child(odd){
    color: red;
}

</style>