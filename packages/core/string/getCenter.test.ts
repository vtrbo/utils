import { expect, it } from 'vitest'
import { getCenter } from './getCenter'

const zhData = '庆历四年春，滕子京谪守巴陵郡。越明年，政通人和，百废具兴，乃重修岳阳楼，增其旧制，刻唐贤今人诗赋于其上，属予作文以记之。予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯，朝晖夕阴，气象万千，此则岳阳楼之大观也，前人之述备矣。然则北通巫峡，南极潇湘，迁客骚人，多会于此，览物之情，得无异乎？若夫淫雨霏霏，连月不开，阴风怒号，浊浪排空，日星隐曜，山岳潜形，商旅不行，樯倾楫摧，薄暮冥冥，虎啸猿啼。登斯楼也，则有去国怀乡，忧谗畏讥，满目萧然，感极而悲者矣。至若春和景明，波澜不惊，上下天光，一碧万顷，沙鸥翔集，锦鳞游泳，岸芷汀兰，郁郁青青。而或长烟一空，皓月千里，浮光跃金，静影沉璧，渔歌互答，此乐何极！登斯楼也，则有心旷神怡，宠辱偕忘，把酒临风，其喜洋洋者矣。嗟夫！予尝求古仁人之心，或异二者之为，何哉？不以物喜，不以己悲，居庙堂之高则忧其民，处江湖之远则忧其君。是进亦忧，退亦忧。然则何时而乐耶？其必曰“先天下之忧而忧，后天下之乐而乐”乎！噫！微斯人，吾谁与归？时六年九月十五日。'
const enData = 'Qingli four spring years, Teng Zijing exile Baling county. The more next year, Zhengtong he, 100 scrap rexing, is to rebuild Yueyang tower, increase its old system, engraved Tang Xian poetry in its present, is to the composition to remember. To Guan Fu Baling wins shape, a lake in Dongting. The title of the mountains, swallow the Yangtze River, Haohao Tang, boundless boundless, Zhaohui Xiyin, myriad, this Yueyang tower of the grand view also, the predecessors of the ready. However, the north Wu Gorge, Antarctic Xiaoxiang, move guest poet, will be in this, at the feeling of things, have no bizarre? If the rain is falling, and the moon is not open, the wind is howling, the waves are empty, the stars are hidden, the mountains are hidden, the commercial journey is not possible, the boats are broken, the darkness is dark, the tiger is howling. Densi floor also, have to go to the country nostalgia, worry slander Ji, everywhere bleak, feeling very sad. To if the spring and Jingming, placid, up and down the sky, a green, sand Gull Xiang set, Jinlin swimming, shore Zhi Tinglan, lush green. And or long smoke empty, Haoxue li, floating light Yue gold, static shadow Shen Bi, fishing song answer each other, this music what pole! Dengsi floor also, there is relaxed and happy, spoil shame Kai forget, the wine Linfeng, its jubilant Yi. Jie! To taste the heart of the ancient benevolence, or different two for, why? Not to be happy, not to be sad, high in the temple is concerned about its people, far away from the river\'s lake is concerned about its king. Is into also worry, back also worry. But when? It will be said "first the world of worry and worry, after the world of joy and joy"! Alas! There Weisi people, who do I belong to? September 15, 2006.'

it('getCenter', () => {
  const zhBefore = '滕子京'
  const zhAfter = '岳阳楼'
  const enBefore = 'Teng zijing'
  const enAfter = 'yueyang tower'
  expect(getCenter(zhData, zhBefore, zhAfter)).toMatchInlineSnapshot('"谪守巴陵郡。越明年，政通人和，百废具兴，乃重修"')
  expect(getCenter(zhData, zhBefore, zhAfter, { startPosition: 4 })).toMatchInlineSnapshot('"谪守巴陵郡。越明年，政通人和，百废具兴，乃重修"')
  expect(getCenter(enData, enBefore, enAfter, { startPosition: 20, returnTarget: true })).toMatchInlineSnapshot('"Teng Zijing exile Baling county. The more next year, Zhengtong he, 100 scrap rexing, is to rebuild Yueyang tower"')
  expect(getCenter(enData, enBefore, enAfter, { startPosition: 16, returnTarget: false, matchCase: false })).toMatchInlineSnapshot('" exile Baling county. The more next year, Zhengtong he, 100 scrap rexing, is to rebuild "')
})
