<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that other
 * 'pages' on your WordPress site will use a different template.
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */

get_header('2'); ?>

<div id="calculation_mainv">
   <div class="container">
      <div class="sub_container">
         <div class="mainv_ttl">
            <h1 class="ttl">相続税・料金かんたん計算</h1>
            <p class="main_txt pc">こちらの相続の知識コンテンツでは、相続税の<br>
               計算方法や早見表を掲載しています
            </p>
         </div>
      </div>
   </div>
</div>
<div class="calculation_breadcrumb">
   <div class="container">
      <div class="sub_container">
         <ul id="pankuzu">
            <li><a href="<?php bloginfo('url'); ?>">HOME</a></li>
            <li><a href="<?php bloginfo('url'); ?>/calculation">相続税かんたん計算</a></li>
         </ul>
      </div>
   </div>
</div>
<div class="calculation_inner">
	<span class="anchorTable" id="calc01"></span>
	<section>
		<div class="section_inner">
			<div class="calculate_inner_block">
				<div class="link_block">
					<div class="link_list_row">
						<a href="#one" class="link_item_box">
							<div class="link_item"><span>概算シュミレーション</span></div>
						</a>
						<a href="#two" class="link_item_box">
							<div class="link_item"><span>早見表</span></div>
						</a>
						<a href="#three" class="link_item_box">
							<div class="link_item"><span> 計算方法</span></div>
						</a>
						<a href="#four" class="link_item_box">
							<div class="link_item"><span>役立つ知識</span></div>
						</a>
						<a href="#five" class="link_item_box">
							<div class="link_item"><span>用語の説明</span></div>
						</a>
					</div>
				</div>
				<div class="block_one" id="one">
					<div class="form_block">
						<h2>相続税・申告報酬　<br class="sp-on" />概算シミュレーション</h2>
						<form action="">
						<fieldset x-data="step1">
							<div class="form_wrapper">
							<h4 class="form_ttl">
								<div class="date_block">
								<div class="date_box">
									<span class="month">STEP</span>
									<span class="day">1</span>
								</div>
								</div>
								遺産の額を入力してください
							</h4>
							<p class="para_under_step_title">遺産の細かい内訳がご不明な場合は、全ての遺産のだいたいの合計額を「現金・預貯
金」のエリアにご入力ください。</p>
							<div class="assets_block">
								<div class="left"><p>資産</p></div>
								<div class="right">
								<div class="input_row">
									<div class="txt"><label for="">現金・預貯金</label></div>
									<div class="input_right_row">
									<div class="input_gp_row">
										<div class="input_gp w160">
										<input @keydown.enter.prevent @change="savings.handleChange" x-model="savings.digit" type="number" min="0" />
										<label for="">万円</label>
										</div>
									</div>
									<div class="btn_gp">
                            			<div class="minus radius" @click="savings.decrease"></div>
                            			<div class="plus radius" @click="savings.increase"></div>
                          			</div>
									</div>
								</div>
								<div class="input_row">
									<div class="txt"><label for="">不動産（土地・建物）</label></div>
									<div class="input_right_row">
									<div class="input_gp_row">
										<div class="input_gp w160">
										<input @keydown.enter.prevent @change="realEstate.handleChange" x-model="realEstate.digit" type="number" min="0" />
										<label for="">万円</label>
										</div>
									</div>
									<div class="btn_gp">
										<div class="minus radius" @click="realEstate.decrease"></div>
										<div class="plus radius" @click="realEstate.increase"></div>
									</div>
									</div>
								</div>
								<div class="input_row">
									<div class="txt"><label for="">有価証券（株式など）​</label></div>
									<div class="input_right_row">
									<div class="input_gp_row">
										<div class="input_gp w160">
										<input @keydown.enter.prevent @change="securities.handleChange" x-model="securities.digit" type="number" min="0" />
										<label for="">万円</label>
										</div>
									</div>
									<div class="btn_gp">
										<div class="minus radius" @click="securities.decrease"></div>
										<div class="plus radius" @click="securities.increase"></div>
									</div>
									</div>
								</div>
								<div class="input_row">
									<div class="txt">
									<label for=""
										>その他財産<br class="pc-on" />
										（金、車、時計など）</label
									>
									</div>
									<div class="input_right_row">
									<div class="input_gp_row">
										<div class="input_gp w160">
										<input @keydown.enter.prevent @change="others.handleChange" x-model="others.digit" type="number" min="0" />
										<label for="">万円</label>
										</div>
									</div>
									<div class="btn_gp">
										<div class="minus radius" @click="others.decrease"></div>
										<div class="plus radius" @click="others.increase"></div>
									</div>
									</div>
								</div>
								</div>
							</div>
							<div class="assets_block debt_block">
								<div class="left"><p>資産</p></div>
								<div class="right">
								<div class="input_row">
									<div class="txt"><label for="">債務・葬式費用</label></div>
									<div class="input_right_row">
									<div class="input_gp_row">
										<div class="input_gp w160">
										<input @keydown.enter.prevent @change="debts.handleChange" x-model="debts.digit" type="number" min="0" />
										<label for="">万円</label>
										</div>
									</div>
									<div class="btn_gp">
										<div class="minus radius" @click="debts.decrease"></div>
										<div class="plus radius" @click="debts.increase"></div>
									</div>
									</div>
								</div>
								</div>
							</div>
							<div class="arrow_img">
								<img src="<?php bloginfo('template_url'); ?>/img/service/calculation/arrow.png" alt="合計" />
							</div>
							<div class="input_row style2">
								<div class="txt"><label class="lb_md" for="">合計（自動計算）</label></div>
								<div class="input_gp_row">
								<div class="input_gp w160">
								<input type="number" x-model="total" @click="reset" readonly />
									<label for="">万円</label>
								</div>
								</div>
							</div>
							</div>
						</fieldset>
						<fieldset x-data="step2">
							<div class="form_wrapper">
								<h4 class="form_ttl">
									<div class="date_block">
									<div class="date_box">
										<span class="month">STEP</span>
										<span class="day">2</span>
									</div>
									</div>
									法定相続人について<br class="sp-on" />入力してください
								</h4>
								
								<div class="input_block">
									<div class="input_row style3">
										<div class="txt"><label for="">配偶者</label></div>
										<div class="input_right_row">
											<div class="input_gp_row">
											<div class="input_gp">
												<div class="rdo_item">
													<input id="have_spouse" name="spouse" type="radio" @click="spouse = true; relative === 'no_relative' && (heirs_count = 1)" />
													<label for="have_spouse">あり</label>
												</div>
											</div>
											<div class="input_gp">
												<div class="rdo_item">
													<input id="not_have_spouse" name="spouse" type="radio" @click="spouse = false; inherit_rate = 0; relative === 'no_relative' && (heirs_count = 0)" />
													<label for="not_have_spouse">なし</label>
												</div>
											</div>
											</div>
										</div>
									</div>
									<div class="input_row style3">
										<div class="txt"><label for="inherit_rate">法定相続人の人数</label><img src="<?php bloginfo('template_url'); ?>/img/service/calculation/q.png" class="q_img" alt="の数" /></div>
										<div class="input_right_row">
											<div class="input_gp_row">
											<div class="input_gp">
												<select name="inherit_rate" id="inherit_rate" :disabled="!spouse" x-model="inherit_rate">
			                              <option value="0">0</option>
			                              <option value="10">10</option>
			                              <option value="20">20</option>
			                              <option value="30">30</option>
			                              <option value="40">40</option>
			                              <option value="50">50</option>
			                              <option value="60">60</option>
			                              <option value="70">70</option>
			                              <option value="80">80</option>
			                              <option value="90">90</option>
			                              <option value="100">100</option>
                            			</select>
												<label for="">%</label>
											</div>
											</div>
										</div>
									</div>
									<div class="input_row style3">
										<div class="txt"><label for="">配偶者以外の法定相続人の続柄</label><img src="<?php bloginfo('template_url'); ?>/img/service/calculation/q.png" class="q_img" alt="の数" /></div>
										<div class="input_right_row rdo">
											<div class="input_gp_row">
											<div class="input_gp">
												<div class="rdo_item">
													<input id="child" name="relative" type="radio" @click="relative = 'child'" />
													<label for="child">子</label>
												</div>
											</div>
											<div class="input_gp">
												<div class="rdo_item max">
													<input id="siblings" name="relative" type="radio" @click="relative = 'siblings'" />
													<label for="siblings">兄弟姉妹</label>
												</div>
											</div>
											</div>
											<div class="input_gp_row">
											<div class="input_gp">
												<div class="rdo_item">
													<input id="parents" name="relative" type="radio" @click="relative = 'parents'" />
													<label for="parents">父母</label>
												</div>
											</div>
											<div class="input_gp">
												<div class="rdo_item max">
													<input id="no_relative" name="relative" type="radio" @click="relative='no_relative'; !spouse && (heirs_count = 0) " />
													<label for="no_relative">いない</label>
												</div>
											</div>
											</div>
										</div>
									</div>
									<div class="input_row style3">
										<div class="txt"><label for="">法定相続人の人数</label><img src="<?php bloginfo('template_url'); ?>/img/service/calculation/q.png" class="q_img" alt="合計" /></div>
										<div class="input_right_row">
											<div class="input_gp_row">
											<div class="input_gp">
											<select name="legal_heirs" id="heirs" :disabled="relative === 'no_relative'" x-model="heirs_count">
												<option :disabled="spouse" selected="!spouse && relative === 'no_relative'" value></option>
												<option :selected="spouse && relative === 'no_relative'" value="1" x-show="!spouse && relative !== 'no_relative'">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
												<option value="4">4</option>
												<option value="5">5</option>
												<option value="6">6</option>
												<option value="7">7</option>
												<option value="8">8</option>
												<option value="9">9</option>
												<option value="10">10</option>
											</select>
												<label for="">人</label>
											</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</fieldset>
						<fieldset x-data="step3">
							<div class="form_wrapper">
								<h4 class="form_ttl">
									<div class="date_block">
									<div class="date_box">
										<span class="month">STEP</span>
										<span class="day">3</span>
									</div>
									</div>
									土地・株式について<br class="sp-on" />入力してください
								</h4>
								<p class="para_under_step_title">STEP3は任意入力です。未入力でも相続税計算ができます。
レガシィに依頼した場合の概算の申告報酬も計算したい方はご入力ください。</p>
								<div class="input_block">
								<div class="input_row style3">
								<div class="txt"><label for="">所有されている土地の数</label></div>
								<div class="input_right_row">
									<div class="input_gp_row">
									<div class="input_gp">
										<input @keydown.enter.prevent @change="lands.handleChange" x-model="lands.digit" type="number" min="0" />
										<label for="">ヶ所</label>
									</div>
									</div>
									<div class="btn_gp">
										<div class="minus radius" @click="lands.decrease"></div>
										<div class="plus radius" @click="lands.increase"></div>
									</div>
								</div>
								</div>
								<div class="input_row style3">
								<div class="txt"><label for="">非上場株式の数</label></div>
								<div class="input_right_row">
									<div class="input_gp_row">
									<div class="input_gp">
										<input @keydown.enter.prevent @change="unlistedshares.handleChange" x-model="unlistedshares.digit" type="number" min="0" />
										<label for="">社</label>
									</div>
									</div>
									<div class="btn_gp">
										<div class="minus radius" @click="unlistedshares.decrease"></div>
										<div class="plus radius" @click="unlistedshares.increase"></div>
									</div>
								</div>
								</div>
							</div>
							</div>
						</fieldset>
						<div class="submit_btn">
							<input type="button" value="計算する" id="show_result" />
						</div>
						</form>
					</div>
					<div class="answer_block">
						<div class="result_block">
						<p class="result_ttl">相続税・申告報酬　<br class="sp" />概算シミュレーション結果</p>
						<div class="result_row">
							<div class="result_label">
							<span>相続税</span>
							</div>
							<div class="result_txt_box">
							<span>〇〇億</span>
							<span>〇〇〇〇万円</span>
							</div>
						</div>
						<div class="result_row">
							<div class="result_label">
							<span>申告報酬<span class="required">※</span></span>
							</div>
							<div class="result_txt_box">
							<span>〇〇〇〇万円</span>
							</div>
						</div>
						<div class="result_row">
							<div class="result_label">
							<span>相続税 ＋ 申告報酬<span class="required">※</span></span>
							</div>
							<div class="result_txt_box">
							<span>〇〇億</span>
							<span>〇〇〇〇万円</span>
							</div>
						</div>
						<p class="result_alert">※税理士法人レガシィにて相続税申告を行った場合の概算報酬です。</p>
						</div>
						<div class="poster">
						<img class="block sp:hidden" src="<?php bloginfo('template_url'); ?>/img/service/calculation/bg_img.jpg" alt="問い合わせする" />
						<img class="hidden sp:block" src="<?php bloginfo('template_url'); ?>/img/service/calculation/bg_img_sp.jpg" alt="問い合わせする" />
						<a href="#" class="link_btn red"> 問い合わせする </a>
						</div>
						<a href="#" class="simulation_btn">シュミレーション結果を印刷する</a>
						<p class="situation_txt">レガシィはあなたの状況に合わせた様々なサービスをご提供しております。</p>
						<a href="/service/" class="simulation_btn service_btn">サービス案内はこちら</a>
					</div>
				</div>
				<div class="block_two" id="two">
					<div class="tax_block">
						<h2>相続税はどのくらい？<br class="sp-on" />計算方法を紹介</h2>
						<div class="tax_amount">
							<p>
								１　相続税の対象となる金額<br />
								相続税の計算の対象となる金額は
							</p>
							<p class="txt_box">遺産総額＋生前贈与財産＋みなし相続財産－非課税財産－葬式費用－債務など</p>
							<p class="mb20">ということになります。</p>
						</div>
						<div class="tax_amount">
							<p>
								２　そこからの基礎控除<br />
								相続税は課税対象の遺産から基礎控除額を引いた金額に対して課税されます。<br />
								この基礎控除は次の式で求められます。
							</p>
							<p class="txt_box">3,000万円＋600万円×法定相続人の数</p>
							<p class="mb30">
								たとえば、夫婦二人と子ども二人の家族で夫が亡くなった場合。<br />
								法定相続人は3人なので、3,000万円＋600万円×3人＝4,800万円が基礎控除額となります。
							</p>
						</div>
						<p>相続税は財産の内容ごとに算出するのではなく、すべての財産の評価額の合計をもとに計算していきます。「現金に対する相続税はいくら、不動産ではいくら」というわけではないのです。資産や負債の数や内訳を考慮したより具体的な概算相続税額を知りたい場合は<a href="#one">相続税額・申告報酬 概算シミュレーション</a>をお試しください。</p>
					</div>
				</div>
				<div class="block_three" id="three">
					<div class="tax_block">
						<h2>相続税の計算がわかる！<br class="sp-on" />相続税の早見表</h2>
						<p class="mb30">相続税は、「法定相続人の数」や「法定相続人と被相続人との関係」によって異なってくるため、一目で目安がわかる早見表は便利な存在といっていいでしょう。たとえば配偶者と子どもで相続をする場合や、子どもだけで相続する場合などに「相続税がいくらになるか」を簡単に把握することができるのです。</p>
						<p>
						「相続税早見表」とは「相続税がだいたいいくらになるのか」を表にして示したものです。細かい計算は後でもいいので、ひとまずは概算を知りたいという人には使い勝手のいい表といえるでしょう。<br />
						相続税は「累進課税方式」を採用しており、相続する財産の評価額が高ければ高いほど、相続税額もまた増えていくという仕組みになっています。税率は一律ではないため、こうした早見表があると重宝するというわけです。
						</p>
					</div>
					<div class="table_block">
						<div class="table_row">
						<div class="table_col">
							<h3>配偶者と子が法定相続人の場合の早見表</h3>
							<span>（単位：万円）</span>
							<table>
							<tr>
								<th>財産の評価額 <br class="pc-on" />（基礎控除前）</th>
								<th>
								配偶者<br />
								子ども1人
								</th>
								<th>
								配偶者<br />
								子ども2人
								</th>
								<th>
								配偶者<br />
								子ども3人
								</th>
								<th>
								配偶者<br />
								子ども4人
								</th>
							</tr>
							<tr>
								<td>5,000万円</td>
								<td>40</td>
								<td>10</td>
								<td>なし</td>
								<td>なし</td>
							</tr>
							<tr>
								<td>6,000万円</td>
								<td>90</td>
								<td>60</td>
								<td>30</td>
								<td>なし</td>
							</tr>
							<tr>
								<td>7,000万円</td>
								<td>160</td>
								<td>113</td>
								<td>80</td>
								<td>50</td>
							</tr>
							<tr>
								<td>8,000万円</td>
								<td>235</td>
								<td>175</td>
								<td>138</td>
								<td>100</td>
							</tr>
							<tr>
								<td>9,000万円</td>
								<td>310</td>
								<td>240</td>
								<td>200</td>
								<td>163</td>
							</tr>
							<tr>
								<td>1億円</td>
								<td>385</td>
								<td>315</td>
								<td>263</td>
								<td>225</td>
							</tr>
							<tr>
								<td>2億円</td>
								<td>1,670</td>
								<td>1,350</td>
								<td>1,218</td>
								<td>1,125</td>
							</tr>
							<tr>
								<td>3億円</td>
								<td>3,460</td>
								<td>2,860</td>
								<td>2,540</td>
								<td>2,350</td>
							</tr>
							<tr>
								<td>4億円</td>
								<td>5,460</td>
								<td>4,610</td>
								<td>4,155</td>
								<td>3,850</td>
							</tr>
							<tr>
								<td>5億円</td>
								<td>7,605</td>
								<td>6,555</td>
								<td>5,963</td>
								<td>5,500</td>
							</tr>
							<tr>
								<td>10億円</td>
								<td>19,750</td>
								<td>17,810</td>
								<td>16,635</td>
								<td>15,650</td>
							</tr>
							<tr>
								<td>20億円</td>
								<td>46,645</td>
								<td>43,440</td>
								<td>41,183</td>
								<td>39,500</td>
							</tr>
							<tr>
								<td>30億円</td>
								<td>74,145</td>
								<td>70,380</td>
								<td>67,433</td>
								<td>65,175</td>
							</tr>
							<tr>
								<td>40億円</td>
								<td>101,645</td>
								<td>97,880</td>
								<td>94,115</td>
								<td>91,425</td>
							</tr>
							<tr>
								<td>50億円</td>
								<td>129,145</td>
								<td>125,380</td>
								<td>121,615</td>
								<td>117,850</td>
							</tr>
							</table>
						</div>
						<div class="table_col">
							<h3>子が法定相続人の場合の早見表</h3>
							<span>（単位：万円）</span>
							<table>
							<tr>
								<th>財産の評価額 <br />（基礎控除前）</th>
								<th>子1人</th>
								<th>子2人</th>
								<th>子3人</th>
								<th>子4人</th>
							</tr>
							<tr>
								<td>5,000万円</td>
								<td>160</td>
								<td>80</td>
								<td>20</td>
								<td>なし</td>
							</tr>
							<tr>
								<td>6,000万円</td>
								<td>310</td>
								<td>180</td>
								<td>120</td>
								<td>60</td>
							</tr>
							<tr>
								<td>7,000万円</td>
								<td>480</td>
								<td>320</td>
								<td>220</td>
								<td>160</td>
							</tr>
							<tr>
								<td>8,000万円</td>
								<td>680</td>
								<td>470</td>
								<td>330</td>
								<td>260</td>
							</tr>
							<tr>
								<td>9,000万円</td>
								<td>920</td>
								<td>620</td>
								<td>480</td>
								<td>360</td>
							</tr>
							<tr>
								<td>1億円</td>
								<td>1,220</td>
								<td>770</td>
								<td>630</td>
								<td>490</td>
							</tr>
							<tr>
								<td>2億円</td>
								<td>4,860</td>
								<td>3,340</td>
								<td>2,460</td>
								<td>2,120</td>
							</tr>
							<tr>
								<td>3億円</td>
								<td>9,180</td>
								<td>6,920</td>
								<td>5,460</td>
								<td>4,580</td>
							</tr>
							<tr>
								<td>4億円</td>
								<td>14,000</td>
								<td>1,920</td>
								<td>8,980</td>
								<td>7,580</td>
							</tr>
							<tr>
								<td>5億円</td>
								<td>19,000</td>
								<td>15,210</td>
								<td>12,980</td>
								<td>11,040</td>
							</tr>
							<tr>
								<td>10億円</td>
								<td>45,820</td>
								<td>39,500</td>
								<td>35,000</td>
								<td>31,770</td>
							</tr>
							<tr>
								<td>20億円</td>
								<td>100,820</td>
								<td>93,290</td>
								<td>85,760</td>
								<td>80,500</td>
							</tr>
							<tr>
								<td>30億円</td>
								<td>155,820</td>
								<td>148,290</td>
								<td>140,760</td>
								<td>133,230</td>
							</tr>
							<tr>
								<td>40億円</td>
								<td>210,820</td>
								<td>203,290</td>
								<td>195,760</td>
								<td>188,230</td>
							</tr>
							<tr>
								<td>50億円</td>
								<td>265,820</td>
								<td>258,290</td>
								<td>250,760</td>
								<td>243,230</td>
							</tr>
							</table>
						</div>
						</div>
						<p>上記の早見表は資産や負債の数や内訳を詳細に考慮できたものではないため、資産や負債の数や内訳を考慮したより具体的な概算相続税額を知りたい場合は<a href="#one">相続税額・申告報酬 概算シミュレーション</a>をお試しください。</p>
					</div>
				</div>
				<div class="block_four" id="four">
					<div class="knowledge_block">
						<h2>あなたに役立つ相続の知識は</h2>
						<div class="knowledge_item">
						<h3>広大地判定の定義や広大地評価とは？広大地評価の改正による相続税への影響も解説！</h3>
						<p>相続した土地の評価額が最大で65％減額される「広大地評価」のことをご存じでしょうか？　節税効果の高いこの広大地評価は税制改正によって廃止されたのですが、一定の要件を満たせば令和5（2023）年10月31日まで適用することが可能となっています。</p>
						</div>
						<div class="knowledge_item">
						<h3>雑種地を相続する場合の評価方法や基礎知識・注意点を解説</h3>
						<p>「雑種地」とは特定の用途が定まっていない土地のこと。雑種地を相続するとなると、どのように評価すればいいのでしょうか。また、宅地との違いはどこにあるのでしょう。今回は、「雑種地」の評価方法や注意点について、相続に焦点を当てて解説していきます。 雑種地とは？ 土地の地目（利用用途）は不動産登記規則99…</p>
						</div>
						<div class="knowledge_item">
						<h3>土地の相続に必要な知識を得よう！費用や必要書類、物件別の対応例もご紹介</h3>
						<p>現金以外でよく相続財産となるのが土地などの不動産ではないでしょうか。しかし、土地は現金のように簡単に分割できるものではありません。相続人同士の関係性がこじれていたり、人数が多かったりすると、誰が相続するかなどを巡って相続トラブルにもなりかねません。また、相続人同士でまとまっても、実際の名義変更に...</p>
						</div>
					</div>
				</div>
				<div class="block_five" id="five">
					<div class="knowledge_block">
						<h2>用語の説明</h2>
						<p class="calculate_tax">相続税を計算するのに関係する用語をピックアップしました。</p>
						<div class="knowledge_item">
							<h4>法定相続人</h4>
							<p>ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。</p>
						</div>
						<div class="knowledge_item">
							<h4>配偶者の遺産取得割合</h4>
							<p>ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。</p>
						</div>
						<div class="knowledge_item">
							<h4>配偶者以外の法定相続人の続柄</h4>
							<p>ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。ダミーテキストです。</p>
						</div>
						<div class="precaution">
							<p>
								＜シミュレーションの注意＞<br />
								現行の税制（2015年1月1日以降に相続が発生された方）をもとに自動計算した金額で、あくまでも目安の金額となります。<br />
								遺産総額の金額は、各種特例や非課税枠及び債務控除等を控除済みの課税価格 （基礎控除前）の金額を入力してください。<br />
								上記金額には小規模宅地の評価減等の特例は考慮しておりません。特例を含めた詳細についてはご面談でご案内いたします。（ご面談は予約制となります。ご面談予約はお問い合わせフォームよりお問い合わせください）<br />
								配偶者が取得する財産については申告によって適用出来る軽減措置があるため、相続税が発生しない場合でも申告が必要となる場合がございます。<br />
								＜申告報酬の加算について＞<br />
								相続人2人目より1人あたり基本報酬×10％の金額を加算します。当該加算については4人を上限とします。<br />
								土地最初の1利用単位につき4.4万円、２利用単位目以降1人用単位につき5.5万円を加算します。<br />
								非上場株式は1銘柄につき15万円を加算します（会社規模によっては別途見積もり）<br />
								お客様の御要望により生じる上記以外の業務については別途ご案内します。
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>


<?php get_footer(); ?>


