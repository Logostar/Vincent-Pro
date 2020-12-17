const catalogMagnet = new Vue({
	el:'#catalogMagnet',
	data:{
		message:'你好，远方的彼岸者！',
		link: [],
		postnum:[],
		//这里是磁贴背景图片
		img:[
			"/Vincent-Pro/source/images/b1.png",
			"/Vincent-Pro/source/images/b2.png",
			"/Vincent-Pro/source/images/b3.png",
			"/Vincent-Pro/source/images/b4.png",
			"/Vincent-Pro/source/images/b5.png",
			"/Vincent-Pro/source/images/b6.png",
			"/Vincent-Pro/source/images/b7.png",
			"/Vincent-Pro/source/images/b8.png",
		],
		//这里是磁贴描述信息
		describe:[
			"听风轻轻吟唱",
			"一些有趣玩意",
			"我的各种作品",
			"我的学习整理",
			"我的各种教程",
			"我的游戏评测",
			"生活点点滴滴",
			"一切胡思乱想",
		],
		//这里是磁贴的文字颜色
		figLetColor: {color:'white'},
		//这里是磁贴的文字遮罩
		figLetimg: {backgroundImage: 'linear-gradient(to bottom,rgba(0, 0, 0, 0.4) 25%,rgba(16,16,16,0) 100%)'},
		//这里是当磁贴图片为透明背景png时默认展示的背景颜色
		figbackColor: {background:'#000000 URL()'},
		//这里是当磁贴图片为透明背景png时默认展示的凹凸效果
		figShadow: {boxShadow: 'inset 3px 3px 18px 0px rgba(50,50,50, 0.4)'},
	},

})

catalogMagnet.link = $(".categoryMagnetitem").children().children().children("a");
catalogMagnet.postnum = $(".categoryMagnetitem").children().children().children("span");
let linecolor = catalogMagnet.figLetColor.color
$("<style type='text/css' id='dynamic-after' />").appendTo("head");
$("#dynamic-after").text(".magnetname:after{background:" + linecolor + "!important}");
