var strategies = {
  // 能源编号格式不正确
  isEnergyCode: function (value,waterMeterList) {
    // 判断是否有重复的能源编号
    for(let i=0;i<waterMeterList.length;i++){
      if(value == waterMeterList[i].energycode){
        return "能源编号不能重复"
      }
    }
    if (value == "") {
      return "能源编号不能为空"
    } else if (value.length != 16) {
      return "请填写长度为16位的能源编号"
    } else if (!/^([A-Z]{2})([A-Z0-9]{1})([0-9]{13})$/.test(value)) {
      return "能源编号格式不正确"
    }
  },
  // 图纸编号格式不正确
  isDrawingCode: function (value,waterMeterList) {
    // 判断是否有重复的图纸编号
    for(let i=0;i<waterMeterList.length;i++){
      if(value == waterMeterList[i].drawingcode){
        console.log(waterMeterList[i].drawingcode)
        return "图纸编号不能重复"
      }
    }
    if (value == "") {
      return "图纸编号不能为空"
    } else if (!/^([S]{1})([1-9]{1})-([0-9]{1,3})$/.test(value))  {
      return "图纸编号格式不正确"
    } else {
      return ""
    }
  },
  // 系数输入不正确
  isCoefficient: function (value,msgError1,msgError2) {
    if (value==0.1||value==1) {
      return ""
    } else if (value=="") {
      return msgError1
    } else {
      return msgError2
    }
  },
  // 管径输入不正确
  isDiameter: function (value,msgError1,msgError2) {
    if (value==15||value==20||value==32||value==40||value==50||value==65||value==80||value==100||value==150||value==200||value==300) {
      return ""
    } else if (value == "") {
      return msgError1
    } else {
      return msgError2
    }
  },
  // 表具名称、安装位置不能为空
  isNoEmpty: function (value,msgError) {
    if (value=="") {
      return msgError
    } else {
      return ""
    }
  },
}

export {  
  strategies  
}