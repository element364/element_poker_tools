import React from 'react'

import TopNavBar from '../../ui/TopNavBar/TopNavBar.jsx';

import Spades from '../../ui/Cards/Spades.jsx';
import Clubs from '../../ui/Cards/Clubs.jsx';
import Hearts from '../../ui/Cards/Hearts.jsx';
import Diamonds from '../../ui/Cards/Diamonds.jsx';

import MathDisplay from '../../ui/MathDisplay/MathDisplay.jsx';
import OddsChart from './OddsChart.jsx';

const screenShotsStyle = {
    width: '100%',
    maxWidth: '500px'
};

const calcEq = {
    color: 'red'
};

class Theory_Rachet_Mat_Ojidania extends React.Component {
	render () {
		return (
			<div className="index">
				<TopNavBar />
				<div className="container">
                    <p>Расчитать шансы банка и эквити можно во время раздачи.</p>
                    <p>Расчет математического ожидания и ICM, это материал, над которым следует работать после сессии.</p>

                    <p>Шансы банка и эквити используются для ответа на вопрос:</p>
                    <i>нужно ли коллировать?</i>

                    <p>Пока у нас нет ответа на вопрос:</p>
                    <i>Нужно ли ставить?</i>

                    <h1>Определение</h1>
                    <p>
                        <strong>Математическое ожидание - это среднее значние случайной величины</strong>
                    </p>
                    <i>Среднее всех возможных исходов, взвешеннос по вероятностям каждого возможного исхода</i>

                    <h1>Рассчет МО: Методика</h1>
                    <p>Чтобы вычислить ожидание решения, используем следующую формулу:</p>
                    <p>Предположим</p>
                    <MathDisplay>
                        O_1, O_2, ..., O_k
                    </MathDisplay>
                    <p>возможные исходы данного решения</p>
                    <h2>Пример</h2>
                    <p>Мы решили поставить, тогда возможны исходы:</p>
                    <ul>
                        <li>Соперник может сбросить</li>
                        <li>Соперник может заколлировать и выиграть</li>
                        <li>Соперник может заколлировать и проиграть</li>
                        <li>Соперник может переставить</li>
                    </ul>

                    <MathDisplay>
                        p_1, p_2, ..., p_k
                    </MathDisplay>
                    <p>вероятности этих исходов</p>

                    <MathDisplay>
                        V_1, V_2, ..., V_k
                    </MathDisplay>
                    <p>ожидание исходов</p>

                    <p>Тогда математическое ожидание решения можно представить в виде уравнения.</p>
                    <p>Расчет математического ожидания</p>

                    <MathDisplay>
                        V = p_1 * V_1 + p_2 * V_2 + ... + p_k * V_k
                    </MathDisplay>

                    <p>Эта формула напоминает формулу расчета эквити против диапазона рук:</p>
                    <MathDisplay>
                        E = p_1 * E_1 + p_2 * E_2 + ... + p_k * E_k
                    </MathDisplay>
                    <p>Теперь эквити определенной руки заменяется ожиданием определенного исхода. Оба уравнения представляют расчет среднего взвешенного.</p>

                    <h1>Среднее взвешенное</h1>
                    <p>Уравнение расчета математического ожидания</p>
                    <MathDisplay>
                        V = p_1 * V_1 + p_2 * V_2 + ... + p_k * V_k
                    </MathDisplay>

                    <ul>
                        <li>Мы разбили расчет ожидания на раличные возможные исходы</li>
                        <li>Необходимо учесть каждый исход, и в каждый момент возможен лишь один исход (соперник не может одновременно и сбросить и переставить)</li>
                        <li>Поэтому вероятность всегда должна удовлетворять:</li>
                    </ul>
                    <MathDisplay>
                        p_1 + p_2 + ... + p_k = 1
                    </MathDisplay>
                    
                    <h1>Дерево решений</h1>
                    <p>Графическое отображение принятых решений</p>
                    <img src={require('../../../images/DecisionTree.png')} className='theory-image'/>
                    <p>Наша задача - присвоить значение в долларовом эквиваленте каждому из исходов.</p>

                    <h1>Пример</h1>
                    <p>Мы сидим на малом блайнде, до нас все сбросили и у большого блайнда в стеке 20BB</p>
                    <p>У нас J<Spades/>8<Spades/> и мы перекрываем соперника по стеку. Если мы пушим, то он ответит в 30% случаев. Должны ли мы пушить, или нужно скидывать?</p>

                    <p>Примерно так выглядят наши варианты:</p>
                    <img src={require('../../../images/DecisionTreeEx1.png')} className='theory-image'/>
                    <p>Если мы фолдим, то теряем один малый блайнд</p>
                    <MathDisplay>
                        EV(fold) = -0.5BB
                    </MathDisplay>
                    <p>Если мы пушим, то возможны 3 варианта:</p>
                    <ul>
                        <li>
                            <strong>Противник сбрасывает</strong>
                            <p>Мы знаем, что ответит он нам в 30% случаев, значит в 70% случаев он сбросит. При этом мы выигрываем 1BB</p>
                            <MathDisplay>
                                EV(push\_op\_fold) = 0.7 * 1BB = 0.7BB
                            </MathDisplay>
                        </li>
                        <li>
                            <strong>Противник коллирует и проигрывает</strong>
                            <p>Для расчта EV нам нужно знать, как часто наша рука будет впереди диапазона соперника</p>
                            <img src={require('../../../images/PokerStov_EV.png')} className='theory-image'/>
                            <MathDisplay>
                                EV(push\_op\_lose) = 0.3 * 0.39 * 20 = 2.34BB
                            </MathDisplay>
                        </li>
                        <li>
                            <strong>Противник коллирует и выигрывает</strong>
                            <MathDisplay>
                                EV(push\_op\_win) = 0.3 * 0.61 * (-20) = 3.66BB
                            </MathDisplay>
                        </li>
                    </ul>
                    <MathDisplay>
                        EV(push) = p_1 * E_1 + p_2 * E_2 + p_3 * E_e
                    </MathDisplay>
                    <MathDisplay>
                        EV(push) = 0.7 * 1BB + 0.3 * 0.39 * 20 + 0.3 * 0.61 * (-20) = -0.62BB
                    </MathDisplay>
                    <p>Как мы видим, сбрасывать нам выгоднее, чем пушить</p>

                    <h1>Пример</h1>
                    <p>До нас на баттоне все сбросили. Стек малого блайнда - 10BB, и он заколлирует пуш в 40% случаев</p>
                    <p>Стек большого блайнда - 25BB, и он заколлирует пуш в 25% случаев</p>
                    <p>У нас 3<Spades/>3<Hearts/> и мы перекрываем по стеку обових. Должны ли мы пушить или нам следует скидывать?</p>

                    <p>BTN: (Hero) 3<Spades/>3<Hearts/>, по стеку перекрывает обоих игроков на блайндах</p>
                    <p>SB: стек - 10BB, заколлирует в 40 $ случаев</p>
                    <p>BB: стек - 25BB, заколирует в 25% случаев</p>
                    <img src={require('../../../images/DecisionTreeEx2.png')} className='theory-image'/>

                    <p>Когда мы сбрасываем, мы ничего не прогрываем.</p>
                    <p>Когда мы пушим и обра сбрасывают, мы выигываем 1.5BB</p>
                    <MathDisplay>
                        EV(push) = p_1 * V_1 + p_2 * V_2 + ... + p_8 * V_8
                    </MathDisplay>

                    <ul>
                        <li>
                            <strong>1Оба игрока на блайнд скидывают</strong>
                            <p>Вероятность этого равна произведению вероятности флода малого блайнда, на вероятность фолда большого блайнда</p>
                            <MathDisplay>
                                p_1 * V_1 = 0.6 * 0.75 * 1.5 = 0.675BB
                            </MathDisplay>
                        </li>

                        <li>
                            <strong>SB колл, BB фолд и мы выигрываем</strong>
                            <MathDisplay>
                                p_2 * V_2 = p(SB\_call) * p(BB\_fold) * p(win\_vs\_SB) * V_2
                            </MathDisplay>
                            <p><em>p(win_vs_SB)</em> берется из PokerStove</p>
                            <MathDisplay>
                                p_2 * V_2 = 0.4 * 0.75 * 0.48 * 11 = 1.584BB
                            </MathDisplay>
                        </li>

                        <li>
                            <strong>SB колл, BB фолд и мы проигрываем</strong>
                            <MathDisplay>
                                p_3 * V_3 = p(SB\_call) * p(BB\_fold) * p(lose\_vs\_SB)
                            </MathDisplay>
                            <p><em>p(lose_vs_SB)</em> можно вычислить, как <em>1 - p(win_vs_SB)</em></p>
                            <MathDisplay>
                                p_3 * V_3 = 0.4 * 0.75 * 0.52 * (-10) = -1.56 BB
                            </MathDisplay>
                        </li>

                        <li>
                            <strong>SB фолд, BB колл и мы выигрываем</strong>
                            <p>Здесь нужно знать наше эквити протиа диапазона большого блайнда, его можно посмотреть в PokerStove</p>
                            <MathDisplay>
                                p_4 * V_4 = 0.6 * 0.25 * 0.46 * 25.5 = 1.76BB
                            </MathDisplay>
                        </li>

                        <li>
                            <strong>SB фолд, BB колл и мы проигрываем</strong>
                            <MathDisplay>
                                p_5 * V_5 = 0.6 * 0.25 * 0.54 * (-25) = -2.025BB
                            </MathDisplay>
                        </li>

                        <li>
                            <strong>Ответят оба и мы выигрываем</strong>
                            <p>В PokerStove посчитаем вероятность каждого выиграть раздачу</p>
                            <img src={require('../../../images/PokerStove_3.png')} className='theory-image'/>
                            <p><em>p(мы выигрываем)</em> = 30</p>
                            <p><em>p(SB выиграет)</em> = 0.33</p>
                            <p><em>p(BB выиграет)</em> = 0.37</p>
                            <MathDisplay>
                                p_6 * V_6 = 0.4 * 0.25 * 0.30  * 35 = 1.05BB
                            </MathDisplay>
                        </li>

                        <li>
                            <strong>Ответят оба и мы выигрываем сайд пот</strong>
                            <p>Такая ситуация возникнет, если SB выигрывает радачу, а у нас будет вторая лучшая рука</p>
                            <p>p(Сайд Пот) = p(SB выигрывает) * p(У нас вторая лучшая рука)</p>
                            <p>PokerStove не может оценивать вероятность 2-й лучшей руки в мультипоте. Поэтому воспользуемся упрощенной формулой</p>
                            <p>p(Сайд пот) = p(PS выигрывает) * p(мы впереди BB)</p>
                            <MathDisplay>
                                P(Side\_pot) = 0.33 * 0.46 = 0.45 = 0.15
                            </MathDisplay>
                            <MathDisplay>
                                p_7 * V_7 = 0.4 * 0.25 * 0.15 * 5 = 0.075
                            </MathDisplay>
                        </li>

                        <li>
                            <strong>Ответят оба и мы проиграем</strong>
                            <p>Раньше мы выяснили, что <em>p(мы выигрываем)</em> = 30</p>
                            <p>p(Сайд Пот) = 0.15</p>
                            <p>Тгда <em>p(мы проиграем)</em> = 1 - 0.30 - 0.15 = 0.55</p>
                            <MathDisplay>
                                p_8 * E_8 = 0.4 * 0.25 * 0.55 * (-25) = -1.375BB
                            </MathDisplay>
                        </li>
                    </ul>
                    <MathDisplay>
                        EV(push) = 0675 + 1.584 - 1.56 + 1.760BB - 2.025 + 1.05 + 0.075 - 1.375 = 1.8735BB
                    </MathDisplay>

                    <h1>Расчет МО, когда решение не закрывает экшн</h1>
                    <p>Пока мы рассматривали только те решения, в которых все наши возможные варианты закрывают экшн</p>
                    <ul>
                        <li>Но можно расчитывать математическое ожидание при любых обстоятельствах, достаточно просто отследить все возможные исходы и варианты, присваивая соответствующие вероятности каждой ветке нашего дерева решений</li>
                        <li>Нужно найти баланс между полнотой и сложностью вычислений</li>
                    </ul>

                    <h1>Пример: расчет МО на флопе</h1>
                    <p>Пот: $100$</p>
                    <p>Hero: $10000</p>
                    <p>Соперник: $500</p>
                    <p>Мы на флопе с J<Diamonds/>J<Hearts/>. На доске 6<Clubs/>8<Spades/>T<Spades/></p>
                    <p>Соперник ставит 50$. Что нам делать?</p>
                    <p>Здесь мы опустим экшн на префлопе, хоть он и важен, зато мы знаем диапазон соперника</p>
                    <p>Соперник: [66+, A7s+, K98+, QTs, JTs, ATo, KTo, QTo, JTo, T9s] = 122 руки</p>
                    <p>Наши варианты:</p>
                    <ul>
                        <li>Фолд</li>
                        <li>Колл <span style={calcEq}>(57% эквити против его диапазона)</span></li>
                        <li>
                            Пуш
                            <ul>
                                <li>Соперник колл - [AA, KK, TT, 88, 66, A<Spades/>K<Spades/>, A<Spades/>Q<Spades/>, A<Spades/>J<Spades/>, A<Spades/>9<Spades/>, Q<Spades/>J<Spades/>] = 30 рук <span style={calcEq}>(19% эквити против его диапазона)</span></li>
                                <li>Соперник фолд - оставшиеся руки (всего 92) <span style={calcEq}>(не важно)</span></li>
                            </ul>
                        </li>
                        <li>Рейз $125</li>
                        <ul>
                            <li>
                                Соперник колл - [KK-JJ, 66, TT, KT, T9, K<Spades/>Q<Spades/>, K<Spades/>J<Spades/>, Q<Clubs/>J<Clubs/>] = 55 рук <span style={calcEq}>(53% эквити против его диапазона)</span>
                            </li>
                            <li>
                                Соперник 3бет/пуш - [AA, TT, 88, A<Spades/>K<Spades/>, A<Spades/>Q<Spades/>, A<Spades/>J<Spades/>, A<Spades/>9<Spades/>,Q<Spades/>J<Spades/>] = 21 рука <span style={calcEq}>(22% эквити проив его диапазона</span>
                            </li>
                            <li>
                                Соперник фолд - оставиеся руки (всего 56) <span style={calcEq}>(не важно)</span>
                            </li>
                        </ul>
                    </ul>
                    <p>Важно понимать, что с сетами соперник может как коллить, так и 3-бетить рейз.</p>
                    <p>Воспользуемся PokerStove, чтобы подсчитать эквити против диапазона сопнрника в каждом случае</p>

                    <p>EV(fold) = 0</p>
                    <p>EV(call) = p(победа) * V<sub>победа</sub> + p(проигрыш) * V<sub>проигрыш</sub> = 0.57 & 150 + 0.43 * (-50) = $68</p>
                    <MathDisplay data={'EV(push) = \\frac{30}{122} * ((-500) * 0.81 + 600 * 0.19) + \\frac{92}{122} * 150 = \\$41.55'} />
                    <p><strong>Важно</strong> понимать, что своим пушем мы сильно сужаем диапазон соперника, и на пуш он ответит только в случае, если будет уверен, что он далеко впереди</p>
                    <p>В этом плане рейз более хороший вариант, так-как позволяет не сильным рукам дойти на шутдауна</p>
                    <p>Что делать, если соперник сделает 4-бет, например до $375. Для ответа на этот вопрос нужно считать МО</p>
                    <MathDisplay data={'\\frac{375}{1100} = 34\\%'}/>
                    <p>Наше эквити ниже, поэтому нас следует скидывать</p>
                    <MathDisplay>
                        EV(raise) = p(call\_win) * V(call\_win) + p(call\_lose) * V(call\_lose) + p(3b) * V(3b) + p(fold) * V(fold)
                    </MathDisplay>
                    <MathDisplay data={'\\frac{55}{122} * (0.53 * 255 + 0.47 * (-125)) + \\frac{21}{122} * (-125) + \\frac{46}{122} * 150'} />

                    <p>Наши варианты</p>
                    <ul>
                        <li>EV(фолд) = 0$</li>
                        <li>EV(колл) = $68 - правильное решение</li>
                        <li>EV(пушш) = $41.55</li>
                        <li>EV(рейз) = $62.31</li>
                    </ul>

                    <p>Мы не учитываем защиту руки от дро, не учитываем позицию</p>
				</div>
			</div>
		)
	}
}

export default Theory_Rachet_Mat_Ojidania;