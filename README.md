** scr/static/jquery-vendor.js **
包装jquery
此方法只依赖于自己，完全不需要任何其他插件与加载器，创建jquery的包装对象jquery-vendor.js
为了调用方便，可在webpack配置文件中创建jquery-vendor.js的别名
  alias: {
      jquery: 'src/assets/jquery-vendor.js'
  }   

** 水表表具watermeter **
WaterMeterName | 表具名称
InstallationSite | 安装位置
AssociationCollect | 关联采集器
Coefficient | 系数
PipeDiameter | 管径
WaterMeterLevel | 表级
Note | 备注
EnergyCode | 能源编号
SuperiorMeter | 上级表
MeterUse | 用途
SubordinateDepartments | 所属部门
PowerType | 电源类型