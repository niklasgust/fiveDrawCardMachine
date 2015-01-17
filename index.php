
<!--- Copy Section -->
<div id="mainwrapper">
<h1 class='AweFonts'>FIVE-CARD DRAW MACHINE</h1>
<h2 id='underHead'>Simulera femkortshänder för att ta reda på sannolikheten att du fått bästa handen i första givet</h2>
<br/>

<div id='showCards'>
<form id='random'>

<div id="antalKort">
<br/><p style='width:300px;'>Välj antalet kort <br/> i kortleken</p>
<input id="52" type='radio' name='deck' value='52' checked='checked'/>52 (5CD)
<br/>
<input id="36" type='radio' name='deck' value='36'/>36 (7E)
<br/>
<input id="32" type='radio' name='deck' value='32'/>32
<br/><br/>
<!--<label> Antal motspelare* <input id='playerNumber' type="number" name="antalSpelare" min="1" max="4" value="4" style='width:50px;'>
</label><br/><br/>  -->
<label>Antal giv <input id='rounds' type="number" name="antalSpelare" min="1" max="100000" value="100" style='width:50px;'>
</label>
<br/><br/>
<label>Hand-för-hand-läge (yes/no) <input id='handforhand' type="text" name="handforhand" value="no" style='width:50px;'>
</label><br/>

<!--<label>Visa resultat i Lightbox (yes/no) <input id='lightboxmode' type="text" name="lightboxmode" value="yes" style='width:50px;'>
</label>-->
<br/>
<label>Visa resultat i Lightbox<input id='lightboxmode2' type="checkbox" name="lightboxmode2" value="YES" checked>
</label>
<br/>


<br/><br/>

<!--<p id='outputCardNumber'></p>-->
<input id='cardShower' type='button' value='Starta om' />
<div id='dealbuttom'><p id='load'></p></div>
<br/>

</div>

<!-- Visa korten -->
<!--<div class="choosenHead"></div>-->
<div class='choosenarea'>
<div class="choosen"></div>
</div>

<div id="resultboxarea" style='background-color:#FFF'></div>

<!--
 <p class="AweFonts" style='position:relative; top:150px; left:35px; color:black; width:500px;'><strong>Välj dina fem kort (simuleringen startar när du valt dina kort)</strong></p>
-->
 <div class="showCards"></div>

<p>
</p>
</form>
</div> <!-- Close box -->


<!--- OUTPUT AV SPELOMGÅNGAR -->
 <div id='bkgPlayGame'></div>  <!--För att ge mörk bakgrund till lightbox-->
<div id ='playGame' class="AweFonts">

<p>Här visas den senaste spelrundan i hela spelserien.
Klicka på boxen eller tryck esc för att ta bort den.</p>

<div class='outputPosition'>
<div id='gameresult' class="AweFonts"></div>


<table id='handtable' class='AweFonts'>
<tr><th>Hand</th><th></th><th>Pl. </th><th></th><th></th></tr>
<tr><td id='yours'></td><td class='tdleft'>You</td><td id='yres' class='tdright'></td><td></td><td id='yresname' class='tdleft tdmargin'></td></tr>
<tr><td id='comp1'></td><td class='tdleft'>cp1</td><td id='c1res' class='tdright'></td><td></td><td id='c1resname' class='tdleft tdmargin'></td></tr>
<tr><td id='comp2'></td><td class='tdleft'>cp2</td><td id='c2res' class='tdright'></td><td></td><td id='c2resname' class='tdleft tdmargin'></td></tr>
<tr><td id='comp3'></td><td class='tdleft'>cp3</td><td id='c3res' class='tdright'></td><td></td><td id='c3resname' class='tdleft tdmargin'></td></tr>
<tr><td id='comp4'></td><td class='tdleft'>cp4</td><td id='c4res' class='tdright'></td><td></td><td id='c4resname' class='tdleft tdmargin'></td></tr>
</table>

</div>
</div>

</div> <!-- Slut på mainwrapper -->
<p>&#169; 2015 Niklas Gustavsson</p>

<div id='log'><p>Log..</p>
<table id='loghead'><tr><th style='width:200px;'>Hand</th><th>4p</th><th>3p</th><th>2p</th><th>1p</th></tr></table>
<table id='logtable'>

</table>
</div>



<!-- Close Copy Section -->
