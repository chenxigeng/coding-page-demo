/*
 * @Author: revol
 * @Date: 2022-11-15 16:14:35
 * @LastEditors: revol
 * @LastEditTime: 2022-11-15 22:31:59
 * @Description: 编程好工具模块的数据文件
 */

import i_exp_creativity_1 from '@/assets/images/main/codingTool/exp_creativity_1.png'
import i_exp_creativity_2 from '@/assets/images/main/codingTool/exp_creativity_2.png'
import i_exp_creativity_3 from '@/assets/images/main/codingTool/exp_creativity_3.png'
import i_intro_3d from '@/assets/images/main/codingTool/intro_3d.png'
import i_nav_icon_py from '@/assets/images/main/codingTool/nav_icon_py.png'
import i_nav_icon_3d from '@/assets/images/main/codingTool/nav_icon_3d.png'
import i_nav_icon_ai from '@/assets/images/main/codingTool/nav_icon_ai.png'
import i_nav_icon_game from '@/assets/images/main/codingTool/nav_icon_game.png'
import i_nav_icon_art from '@/assets/images/main/codingTool/nav_icon_art.png'
import i_nav_icon_hardware from '@/assets/images/main/codingTool/nav_icon_hardware.png'
import i_nav_icon_js from '@/assets/images/main/codingTool/nav_icon_js.png'
import i_nav_icon_creativity from '@/assets/images/main/codingTool/nav_icon_creativity.png'

export const navList = [
  {
    id: 1,
    itemTitle: '腾讯扣叮-编程第一课',
    keywords: ['6-9岁', '编程启蒙', '计算思维'],
    iconSrc:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAiCAYAAABBY8kOAAAEFElEQVRIia2XX0wcVRTGf3NnlyW0S11boLS1FhpLADXWKqCl0QbTmFRTNT5oYoyvuIkaEx/wyRfdN01MiL41vhijSY1SH7Q2TYWaUPoHWwoNVFppkQCtlUJhd2dmx9zZuduZ2eXf4vcyOefc+31z7px77h1tsu09lkEV8DLQCuwFtgApYBw4C/QA3wOTS9E4QtFEPC8w29HZBHwONC/3Ji56gXeiifjpAI/zFIVmzHZ0drgTVyqCO7bXnZuHUEDgEeALd4my0AWh+hpCjbXoD1YjysuwzQz2nTms8WnMS6OYQ1fByqgZn8x2dB4E2qOJ+EXlDAWUfSKh+h1EDrYiNm7wDdJ0Ha0ihqiIEX5sF5lbM6R+6sEcuqaG7HW5WnPv+0FtC5HnmmQ2HwJvZZkgcqCF0kPPoJWVLrtmckz40V1oIR1r9IZyb08f7zOBblQxAE8Dp9SIyIFmSvY/saxAIaRPnCH1S683IrP7XRXDp/eWq4aSZ4sTkZBzQw01XpfDLdx9ka0uXRB5cZ+zdEVDLvsL+xwuF5J7a8jdjNlsGmsRsWhOIjNxk+SRE2SmbiMqY5S+sh9RvWnZuOQINe7EvDCihr4kvJURbqj15bHw7a9YN6aw04bzlPZK42H/8rVKoSZliQeqfESZqX+KtsV2H1ez+kbZYPk6H7HcJ8XaIurj2iKFclvatm0fcemrbYjNG0HXnbWX9orjmq+iRMjtwg85QjNzaJvuy0X1bZWse/c1FsNScXtu3mtOyowuKysz/e+ipKuF9fdN74zzwj1PHJiXr62VP4cAV48UOpoL9g9jzyfXLCI5JJcHR6XQINDvDEgbwT5VFFLHeh0uF5J7UPWJ3GFlnB5wzphiYY5cx+gd8M52uJXQTM6taQhP5a0WemUMhO6ddckrlOve4d11iKr7ixbSNqwn/LCvlb2hhCqAFsclBCVtTxYtohDaXec1DymhN3MD6ncgYuVrF9q5LXhMhP3d+/G6RSevTklHW1/m9WyWQnuUpW+t/H+ELAv77oLXM13wXrcWAQmjbwhMS3nPAEl/Cxoec5723STmwJ+r1jH6R5j7+DDJH0963Z/h3ut+Bl6XRqqr29lw1pXraKUR52gPtHuM/mGs0XEizz+VdxWzRsaCXVverL7GrbqvgHNOJoaJefEK9kKKzO07GH+M4GfKkPrhJEbfIOnu876QPGKMwatBkXZlqG/UrsS8cDIcHssK35oh2dWNnUxnMzt1AeuvCcjYThYL3xwDw1Szz0YT8da8K7H7B7BntqOz2i33j4AG2YUXDncV/B4y+/kvjxSMAe8HHb6qiybiE9FE/Ds3w9zdtgDu9cZ8vB1NxH8Lupf6EZMNTwrKDOXuvuVWqLy8y58uFZPtSx6nKnY8jwn4DzeQgHU7MSGyAAAAAElFTkSuQmCC',
    iconBgColor: 'rgb(246, 202, 219)',
    data: {
      info: '专为6-9岁孩子定制的编程启蒙App',
      title: '腾讯扣叮-编程第一课',
      desc: '腾讯自研的游戏化编程启蒙APP，作为孩子的“编程第一课”，通过趣味的积木编程闯关，让孩子学习编程更简单、更有趣、更高效。',
      mediaType: 'video', // [video|image]
      mediaSrc: 'https://wuji-30130.sz.gfp.tencent-cloud.com/20210516_rfqbytd62t.MP4', // 多媒体文件路径
      ctrlBtnText: '立即体验', // 操作按钮的文本
      ctrlBtnClass: ['xgame-labs'], // 操作按钮额外的类
      ctrlBtnIcon:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAm0lEQVQ4ja2SAQ6DMAwDXX4H34Cfdk/ZCr/wVAhaCCUtE5YCkn0CTAOSPcnEs5JkVQYXoYaqTMhXbAo4Svsu0xkzyng6MfYhpbeVdGAeqzMrQ0/WInefITmQnAt//S1ZlQm/Nv8r1+kBpMKnJsn2U7P5PrF12aLDvFpPx1XrsmnfVot3lu3Sf6xOy7LZmrrSWmdSsNYHwFitA4QvhjBQAClNsZwAAAAASUVORK5CYII=', // 操作按钮图标路径
      hasMore: true, // 是否有了解更多的按钮
      exampleTitle: '应用截图',
      exampleList: [
        {
          label: '妙趣剧情，学习不枯燥',
          imgSrc: 'https://img0.baidu.com/it/u=2539065673,486705483&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
        },
        {
          label: '编程闯关，探索编程奥秘',
          imgSrc: 'https://img2.baidu.com/it/u=523790715,2699391996&fm=253&fmt=auto&app=120&f=JPEG?w=1202&h=800'
        },
        {
          label: '知识解锁，收获丰富趣味知识',
          imgSrc: i_exp_creativity_3
        }
      ]
    }
  },
  {
    id: 2,
    itemTitle: '3D实验室',
    keywords: ['6岁+', '创造力', '3D立体'],
    iconSrc: i_nav_icon_3d,
    iconBgColor: 'rgb(187, 255, 245)',
    data: {
      info: '创意实验室的3D版本',
      title: '3D实验室',
      desc: '扣叮和艾兰岛共同出品，学会了创意实验室就可以轻松上手，培养空间思维，制作3D创意作品。也可前往艾兰岛官网体验更专业的游戏编辑器。',
      mediaType: 'image', // [video|image]
      mediaSrc: i_intro_3d, // 多媒体文件路径
      ctrlBtnText: '立即创作', // 操作按钮的文本
      ctrlBtnClass: [], // 操作按钮额外的类
      ctrlBtnIcon: '', // 操作按钮图标路径，为空不显示
      hasMore: false, // 是否有了解更多的按钮
      exampleTitle: '入门学习',
      exampleList: []
    }
  },
  {
    id: 3,
    itemTitle: '人工智能实验室',
    keywords: ['10+岁', '前沿科技', '走进AI'],
    iconSrc: i_nav_icon_ai,
    iconBgColor: 'rgb(193, 244, 236)',
    data: {
      info: '算法模型，感受前沿科技',
      title: '人工智能实验室',
      desc: '初学者直接应用简单的AI能力（拍照识花、语音识别、智能聊天等），体会AI的乐趣；高阶学习者参与常见算法模型的调参过程，学习AI的底层逻辑。',
      mediaType: 'video', // [video|image]
      mediaSrc: 'https://wuji-30130.sz.gfp.tencent-cloud.com/20200317_ojl6d4y4ciq.mp4', // 多媒体文件路径
      ctrlBtnText: '立即创作', // 操作按钮的文本
      ctrlBtnClass: [], // 操作按钮额外的类
      ctrlBtnIcon: '', // 操作按钮图标路径，为空不显示
      hasMore: true, // 是否有了解更多的按钮
      exampleTitle: '入门学习',
      exampleList: [
        {
          label: '姿态侦测',
          imgSrc: i_exp_creativity_1
        },
        {
          label: '涂鸦',
          imgSrc: i_exp_creativity_2
        },
        {
          label: '智能聊天',
          imgSrc: i_exp_creativity_3
        },
        {
          label: '计算生日222',
          imgSrc: i_exp_creativity_3
        }
      ]
    }
  },
  {
    id: 4,
    itemTitle: '游戏实验室',
    keywords: ['6-8岁', '创意游戏', '零基础'],
    iconSrc: i_nav_icon_game,
    iconBgColor: 'rgb(220, 199, 251)',
    data: {
      info: '图形化编程，创意游戏闯关',
      title: '游戏实验室',
      desc: '积木块拼接而成的丰富多彩的创意游戏世界，零基础小朋友也可以通过图形化编程进行寻路闯关。',
      mediaType: 'video', // [video|image]
      mediaSrc: 'https://wuji-30130.sz.gfp.tencent-cloud.com/20200430_qdivvm8bin.mp4', // 多媒体文件路径
      ctrlBtnText: '立即创作', // 操作按钮的文本
      ctrlBtnClass: [], // 操作按钮额外的类
      ctrlBtnIcon: '', // 操作按钮图标路径，为空不显示
      hasMore: false, // 是否有了解更多的按钮
      exampleTitle: '入门学习',
      exampleList: []
    }
  },
  {
    id: 5,
    itemTitle: '艺术(p5)实验室',
    keywords: ['7+岁', '艺术表达', '数理知识'],
    iconSrc: i_nav_icon_art,
    iconBgColor: 'rgb(246, 202, 219)',
    data: {
      info: '用编程进行艺术表达',
      title: '艺术(p5)实验室',
      desc: '将编程与艺术、数学等STEAM多方面知识相结合，制作可视化的艺术案例，激发学生的想象力和创造力，帮助更好地学习理解数理知识。',
      mediaType: 'video', // [video|image]
      mediaSrc: 'https://wuji-30130.sz.gfp.tencent-cloud.com/20200430_nhuts1fwacd.mp4', // 多媒体文件路径
      ctrlBtnText: '立即创作', // 操作按钮的文本
      ctrlBtnClass: [], // 操作按钮额外的类
      ctrlBtnIcon: '', // 操作按钮图标路径，为空不显示
      hasMore: true, // 是否有了解更多的按钮
      exampleTitle: '入门学习',
      exampleList: [
        {
          label: '蒙德里安',
          imgSrc: i_exp_creativity_1
        },
        {
          label: 'wavemaker',
          imgSrc: i_exp_creativity_2
        },
        {
          label: 'recursice tree',
          imgSrc: i_exp_creativity_3
        },
        {
          label: '计算生日222',
          imgSrc: i_exp_creativity_3
        }
      ]
    }
  },
  {
    id: 6,
    itemTitle: '硬件实验室',
    keywords: ['6+岁', '软硬结合', '创客教育'],
    iconSrc: i_nav_icon_hardware,
    iconBgColor: 'rgb(193, 244, 236)',
    data: {
      info: '软硬件结合的编程体验',
      title: '硬件实验室',
      desc: '通过在线编程，控制Arduino、micro:bit、OpenAIE、CocoRobo等教育硬件，并同时支持积木和代码两种模式，体会软硬结合的编程学习。',
      mediaType: 'video', // [video|image]
      mediaSrc: 'https://wuji-30130.sz.gfp.tencent-cloud.com/20200430_k5b1bg002nl.mp4', // 多媒体文件路径
      ctrlBtnText: '立即创作', // 操作按钮的文本
      ctrlBtnClass: [], // 操作按钮额外的类
      ctrlBtnIcon: '', // 操作按钮图标路径，为空不显示
      hasMore: false, // 是否有了解更多的按钮
      exampleTitle: '入门学习',
      exampleList: []
    }
  },
  {
    id: 7,
    itemTitle: 'JS实验室',
    keywords: ['7+岁', '前端开发', 'JavaScript'],
    iconSrc: i_nav_icon_js,
    iconBgColor: 'rgb(251, 232, 194)',
    data: {
      info: '面向对象的Web语言',
      title: 'JS实验室',
      desc: '从积木命令到文本代码，从形状绘制到精灵动画，引导掌握计算机科学知识，从易到难感受JavaScript语言的魅力。',
      mediaType: 'video', // [video|image]
      mediaSrc: 'https://wuji-30130.sz.gfp.tencent-cloud.com/20200430_0kifyfeks6k.mp4', // 多媒体文件路径
      ctrlBtnText: '立即创作', // 操作按钮的文本
      ctrlBtnClass: [], // 操作按钮额外的类
      ctrlBtnIcon: '', // 操作按钮图标路径，为空不显示
      hasMore: true, // 是否有了解更多的按钮
      exampleTitle: '入门学习',
      exampleList: [
        {
          label: '彩虹旗',
          imgSrc: i_exp_creativity_1
        },
        {
          label: '海底世界',
          imgSrc: i_exp_creativity_2
        },
        {
          label: '绘制大世界',
          imgSrc: i_exp_creativity_3
        },
        {
          label: '计算生日222',
          imgSrc: i_exp_creativity_3
        }
      ]
    }
  },
  {
    id: 8,
    itemTitle: '创意实验室',
    keywords: ['6+岁', '创造力', '图形化'],
    iconSrc: i_nav_icon_creativity,
    iconBgColor: 'rgb(251, 232, 194)',
    data: {
      info: '像搭积木一样编程创作',
      title: '创意实验室',
      desc: '让学编程和搭积木一样简单，有效帮助孩子形成编程思维，锻炼逻辑思维，轻松制作有趣有料的编程项目，发挥自己的无限创意。',
      mediaType: 'video', // [video|image]
      mediaSrc: 'https://wuji-30130.sz.gfp.tencent-cloud.com/20200323_8htrkrqaeb52.mp4', // 多媒体文件路径
      ctrlBtnText: '立即创作', // 操作按钮的文本
      ctrlBtnClass: [], // 操作按钮额外的类
      ctrlBtnIcon: '', // 操作按钮图标路径，为空不显示
      hasMore: true, // 是否有了解更多的按钮
      exampleTitle: '入门学习',
      exampleList: [
        {
          label: '一起去郊游',
          imgSrc: i_exp_creativity_1
        },
        {
          label: '让贺卡动起来',
          imgSrc: i_exp_creativity_2
        },
        {
          label: '下雪吧！',
          imgSrc: i_exp_creativity_3
        },
        {
          label: '计算生日222',
          imgSrc: i_exp_creativity_3
        }
      ]
    }
  },
  {
    id: 9,
    itemTitle: 'Python实验室',
    keywords: ['7+岁', '逻辑思维', 'Python'],
    iconSrc: i_nav_icon_py,
    iconBgColor: 'rgb(193, 223, 251)',
    data: {
      info: '通用易读的编程语言',
      title: 'Python实验室',
      desc: '从图形化编程到文本编程，从AI应用到硬件物联，首创带有舞台区的编辑模式，运用动画和声音制作游戏，全方面体会Python语言的乐趣。',
      mediaType: 'video', // [video|image]
      mediaSrc: 'https://wuji-30130.sz.gfp.tencent-cloud.com/20200317_qrjirl2blsbpython.mp4', // 多媒体文件路径
      ctrlBtnText: '立即创作', // 操作按钮的文本
      ctrlBtnClass: [], // 操作按钮额外的类
      ctrlBtnIcon: '', // 操作按钮图标路径，为空不显示
      hasMore: true, // 是否有了解更多的按钮
      exampleTitle: '入门学习',
      exampleList: [
        {
          label: '画星星',
          imgSrc: i_exp_creativity_1
        },
        {
          label: 'AI智能（语音+图像）',
          imgSrc: i_exp_creativity_2
        },
        {
          label: '计算生日',
          imgSrc: i_exp_creativity_3
        },
        {
          label: '计算生日222',
          imgSrc: i_exp_creativity_3
        }
      ]
    }
  }
]
