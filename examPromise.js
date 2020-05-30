const firstFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('1')
            resolve()
        }, 3000)
    })

}

const secondFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2')
            resolve()
        }, 1000)
    })

}

const thirdFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('3')
            resolve()
        }, 2000)
    })
}

// โจทย์ข้อสุดท้ายให้ใช้ promise ในการช่วยให้ console.log ออกมาเรียงลำดับ 1 , 2 , 3 ตามลำดับ
// โดยไม่อนุญาติให้แก้เลขเวลาใน setTimeout โดยให้ เรียก firstFunction ก่อน หลังจากนั้นจึงตามด้วย
// secondFunction และ thirdFunction ตามลำดับ
(async () => {
    await firstFunction()
    await secondFunction()
    await thirdFunction()
    
})()