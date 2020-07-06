(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"piggi bank_atlas_", frames: [[0,0,469,188],[471,0,180,201],[0,190,180,201],[182,190,180,201],[364,203,180,201]]}
];


// symbols:



(lib.Mesh = function() {
	this.initialize(ss["piggi bank_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.adi = function() {
	this.initialize(ss["piggi bank_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.inbal = function() {
	this.initialize(ss["piggi bank_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.limor = function() {
	this.initialize(ss["piggi bank_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.rotem = function() {
	this.initialize(ss["piggi bank_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.vee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgyAAIAKgJIAbAYIA2gxIAKAJIhBA8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.vee, new cjs.Rectangle(-5.1,-3.5,10.2,7.1), null);


(lib.txt_gray = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.gray_txt = new cjs.Text("אם לא משתמשים מכבים ", "24px 'Calibri'");
	this.gray_txt.name = "gray_txt";
	this.gray_txt.textAlign = "center";
	this.gray_txt.lineHeight = 31;
	this.gray_txt.lineWidth = 112;
	this.gray_txt.parent = this;
	this.gray_txt.setTransform(18.6986,0.65,0.3234,0.3234);

	this.timeline.addTween(cjs.Tween.get(this.gray_txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_gray, new cjs.Rectangle(0,0,37.4,33), null);


(lib.pink_x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhCA7IBRh0QAbAcAZAdIgmA7g");
	this.shape.setTransform(-8.775,10.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6F6F6").s().p("AA2CgIg7hfIgaApQgZgegbgdIAdgpIhjieIBdAAIA3BUIA+hbIBZAAIhfChIBnCeg");
	this.shape_1.setTransform(1.125,-0.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DC9E9D").s().p("AgJD4QhggEhFhFQg8g7gKhQQgDgSAAgSQAAgPACgPIADgXQAFgYALgWIABgCQARgoAighQBIhJBmAAQBmAABKBJQBIBIAABmQAABnhIBIQgpApgzATIgHACQgbAIgcADIgWAAIgJAAgAgwAEIgdAqIhSB1IBgAAIAmg7IAZgpIA8BfIBkAAIhnidIBgiiIhaAAIg/BbIg2hUIhcAAg");
	this.shape_2.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pink_x, new cjs.Rectangle(-24.3,-24.8,49.6,49.6), null);


(lib.pig = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pig
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD9E9E").s().p("AypfLIAAuQQnbmghsqhQoXAKCps1QBhCnCHBGQAMFDGtBhQB3SKWIGPQUqD+LTnkIkvDbQnHDQndA7IAAC5QAGBuB+gNIMgAAIAAApQgYB4hjgMItDAAQhkgFgchNIAAldQnMAjl7hWQoOiOmbkBIAAJXQAiCUBZgPIMuAFIAAA5QgWBjhWgMItSAAQgOADgNAAQhCAAgZhggEAhcgH8QjgkZkLEZQgzATAKhqQAvjnDtgiQD+ATAlEWQgCBBgVAAQgIAAgMgKgAPF7GID+lYQA0gbBwAgIA8DCIiYC+QingbifgSg");
	this.shape.setTransform(-58.3279,-15.1392);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EFC3C2").s().p("A30fdQhYAPgjiUIAApYQGcECINCOIAAFSgAEbd7IAAi4QHdg8HHjPIAAIlIsfAAIgZABQhmAAgGhjgAoNXCQ2KmOh3yKQmthhgLlEQBoA2CAgEQKv2FejDSQCfARCoAcICYi+ICYi/QBkglApAbQC9F2BdFYQHNE1CvFuIFPAAQB3AqgOBGIAAQhQAABJhgAJIlaAAQipE4j9DPQg6Aug9ApQnaE+rcAAQl/AAnHhYgAYMmzQAoAlADhcQgmkVj+gUQjtAigvDnQgJBrAygUQCGiMB7AAQB7AABwCMg");
	this.shape_1.setTransform(0.9114,-22.4938);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pig, new cjs.Rectangle(-276.6,-224.3,527.9000000000001,418.3), null);


(lib.coin_heigh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("חשמל", "bold 40px 'Calibri'", "#F1F1F1");
	this.text.textAlign = "center";
	this.text.lineHeight = 49;
	this.text.lineWidth = 109;
	this.text.parent = this;
	this.text.setTransform(-0.0387,-9.55,0.3214,0.3214);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4B500").s().p("AiKCLIgHgIIgCgBQgZgdgNgjIgBgHQgKgbABggIAAgIIAAgBQACgqASgkQAOgbAXgYQAMgLANgKQAqgfA3gFIAJAAIAHAAQAbAAAYAGIAFABQAmALAgAbIADACIAKAKQA5A6AABQQAABRg5A6Qg6A5hRAAQhQAAg6g5g");
	this.shape.setTransform(0.1,-0.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FED80F").s().p("Ai+C+IgKgKIA2g6IACACIAHAHQA5A5BQAAQBSAAA6g5QA5g5AAhRQAAhRg5g5IgLgKIAzgsIAKAJQBQBPAABvQAABvhQBPQhPBQhvAAQhvAAhPhQgAj6BlQgLgagFgdIBHg+IAAAJQAAAfAJAcIACAHIg+AzIgEgJgAkMgZQAIhgBGhFQBChCBagLIAPgCIj6D/IABgLgAA0jFQgYgGgcAAIgHAAIA4g+QAcAFAbAKIAGAEIg2AyIgEgBg");
	this.shape_1.setTransform(0.05,0.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEF064").s().p("AjKCbIA/gzQAMAiAaAdIg2A6QgegggRgmgAjeBQQgCgSAAgRIAAgPID4j+IAVAAQAUAAATACIAKACIg5A+IgJAAQg1AFgrAfQgNAKgLAMQgYAXgOAbQgSAkgCApIAAABIhHA/IgBgLgACrhxQgggagmgMIA2gyQAjAPAeAaIAFAGIgzAsIgDgDg");
	this.shape_2.setTransform(-4.425,-4.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.coin_heigh, new cjs.Rectangle(-26.9,-26.9,53.9,53.9), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#926037").s().p("EgXHAlRQifAAiRg+QiOg8hshtQhthtg8iMQg+iSAAigMAAAgx+QAAifA+iSQA8iMBthtQBshuCOg7QCRg+CfAAMAuOAAAQCfAACSA+QCNA7BtBuQBtBtA8CMQA+CSAACfMAAAAx+QAACgg+CSQg8CNhtBsQhsBtiOA8QiSA+ifAAg");
	this.shape.setTransform(234.75,246.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(8.3,8.1,453,477), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9D305").s().p("EgXHAlRQifAAiSg+QiMg8hthtQhuhtg7iNQg+iSAAifMAAAgx9QAAigA+iRQA7iOBuhtQBthtCMg7QCSg+CfAAMAuOAAAQCfAACTA+QCMA7BtBtQBtBtA8COQA+CRAACgMAAAAx9QAACfg+CSQg8CNhtBtQhtBtiMA8QiTA+ifAAg");
	this.shape.setTransform(234.55,246.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(8.1,8,453,477), null);


(lib.blue_x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah+CCIBXh+IhOh/IBKAAIArBDIAyhIIBHAAIhMCAIBSB+IhQAAIgvhMIgzBQg");
	this.shape.setTransform(0.05,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5CB7A8").s().p("AgHDGQhNgDg3g3QgvgvgJhBQgCgOAAgOQAAgMACgMIADgSQAEgUAHgRIABgBQAOggAbgbQA6g6BRAAQBSAAA7A6QAPAPALASQAfAvAAA7QAAAOgCAMQgHBCgwAwQgiAhgnAOIgHACQgVAGgWACIgSABIgHAAgAgmAEIhYB+IBMAAIAyhQIAwBMIBQAAIhTh+IBNiAIhHAAIgzBIIgrhDIhKAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blue_x, new cjs.Rectangle(-19.8,-19.8,39.6,39.6), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9ACEC2").s().p("A4PH+QhDAAgwgwQgwgwAAhDIAAq1QAAhDAwgwQAwgwBDAAMAwfAAAQBDAAAwAwQAwAwAABDIAAK1QAABDgwAwQgwAwhDAAg");
	this.shape_1.setTransform(179.475,59.175);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(8,8.2,343,102), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9ACEC2").s().p("EgW9AyoQiXAAiLg7QiFg5hnhnQhnhog5iFQg7iLAAiWMAAAhN9QAAiXA7iLQA5iFBnhnQBnhnCFg5QCLg7CXAAMAt7AAAQCWAACLA7QCFA5BoBnQBnBnA5CFQA7CLAACXMAAABN9QAACWg7CLQg5CFhnBoQhoBniFA5QiLA7iWAAg");
	this.shape_2.setTransform(229.6,332.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(8.1,8.2,443,648), null);


(lib.blak_x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6F6F6").s().p("AA2CgIg7hfIgaApQgZgegbgdIAdgpIhjieIBdAAIA3BUIA+hbIBZAAIhfChIBnCeg");
	this.shape.setTransform(0.625,-0.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhCA7IBRh0QAbAcAZAdIgmA7g");
	this.shape_1.setTransform(-9.275,10.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgJD4QhggEhGhFQg7g7gLhQQgCgSAAgSQAAgPACgPQABgLADgMQAEgYAKgWIABgCQASgoAhghQBJhJBmAAQBnAABIBJQBJBIAABmQAABnhJBIQgoApgyATIgIACQgbAIgcADIgWAAIgJAAgAgwAEIgcAqIhSB1IBfAAIAmg7IAagpIA7BfIBkAAIhnidIBfiiIhZAAIg+BbIg3hUIhdAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.blak_x, new cjs.Rectangle(-24.8,-24.8,49.6,49.6), null);


(lib.bag_heigh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#936037").s().p("AgkIYQiIgCh6gdIg2AOQgoAKgCgZQgCgZAZg7Qg3noE9kGQgNgdAWAGQgCgWATABQgWhDg4g6QgDggAjgFQAtAUAugUQAbAUARgUQAfAUAbgUQAdAUANgRQAuACgFAhQhOBLACAyQARgIgCAQQATgDgHANQANAIgHAIQAaAWAOAYQD8DqgbHlIAQA4QAJAvgpgFIhSgOQhmAbiPAAIhCgBg");
	this.shape.setTransform(0.0023,-0.1064);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bag_heigh, new cjs.Rectangle(-39,-53.8,78.1,107.5), null);


(lib.inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DD9E9E","#F1D7D7","#DD9E9E","#DD9E9E","#F2DADA","#DD9E9E"],[0.133,0.263,0.373,0.612,0.741,0.847],-99.9,173,99.8,-172.9).s().p("EghyAPyQh/AAhahbQhahZAAiAIAA18QAAh+BahaQBahbB/AAMBDkAAAQB/AABbBbQBaBaAAB+IAAV8QAACAhaBZQhbBbh/AAg");
	this.shape.setTransform(255.15,109.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.inner, new cjs.Rectangle(8.2,8.1,494,202), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#DD9E9E","#F1D7D7","#DD9E9E","#DD9E9E","#F2DADA","#DD9E9E"],[0.133,0.263,0.373,0.612,0.741,0.847],-99.9,173,99.8,-172.9).s().p("EghyAPyQh/AAhahbQhahZAAiAIAA18QAAh+BahaQBahbB/AAMBDkAAAQB/AABbBbQBaBaAAB+IAAV8QAACAhaBZQhbBbh/AAg");
	this.shape_3.setTransform(255.15,109.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(8.2,8.1,494,202), null);


(lib.logohit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(68,80,87,0.808)").s().p("AgiBVIAAgKIgKAAIAAgKIgKAAIAAiBIAKAAIAAgKIAKAAIAAgKIBFAAIAAAKIAKAAIAAAUIAKAAIAABFIhPAAIAAAoIAKAAIAAAKIAdAAIAAgUIAKAAIAAgKIAeAAIAAAUIgKAAIAAAUIgKAAIAAAKgAgYgOIAxAAIAAgoIgKAAIAAgKIgdAAIAAAKIgKAAg");
	this.shape.setTransform(170.5,207.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(7,7,7,0.039)").s().p("AgTBBIAAgKIgKAAIAAhtIAKAAIAAgKIAdAAIAAAKIAKAAIAAAUIAKAAIAAA7IgKAAIAAAeIgKAAIAAAKg");
	this.shape_1.setTransform(190,207.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(69,82,90,0.859)").s().p("AgiBVIAAgKIgKAAIAAgKIgKAAIAAiBIAKAAIAAgKIAKAAIAAgKIBFAAIAAAKIAKAAIAAAUIAKAAIAABtIgKAAIAAAUIgKAAIAAAKgAgYA3IAKAAIAAAKIAdAAIAAgKIAKAAIAAgeIAKAAIAAg7IgKAAIAAgUIgKAAIAAgKIgdAAIAAAKIgKAAg");
	this.shape_2.setTransform(189.5,207.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(67,78,85,0.769)").s().p("AgdBVIAAgKIgKAAIAAgKIgKAAIAAgeIgKAAIAAhFIAKAAIAAgeIAKAAIAAgKIAKAAIAAgKIBFAAIAAAKIAKAAIAAAUIAKAAIAABFIhPAAIAAAoIAKAAIAAAKIATAAIAAgKIAKAAIAAgKIAKAAIAAgKIAeAAIAAAUIgKAAIAAAUIgKAAIAAAKgAgTgOIAxAAIAAgoIgKAAIAAgKIgdAAIAAAKIgKAAg");
	this.shape_3.setTransform(228,207.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(69,81,89,0.835)").s().p("AgnBVIAAgUIgKAAIAAgUIgKAAIAAhZIAKAAIAAgUIAKAAIAAgKIAKAAIAAgKIA7AAIAAAKIAKAAIAAAKIAKAAIAAAUIAKAAIAABjIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKgAgdAtIAKAAIAAAKIAKAAIAAAKIATAAIAAgKIAKAAIAAgKIAKAAIAAhZIgKAAIAAgKIgKAAIAAgKIgTAAIAAAKIgKAAIAAAKIgKAAg");
	this.shape_4.setTransform(282,207.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(69,81,89,0.843)").s().p("APABVIAAgKIgKAAIAAgUIgKAAIAAhtIAKAAIAAgUIAKAAIAAgKIBGAAIAAAKIAKAAIAAAoIgUAAIAAgUIgKAAIAAgKIgeAAIAAAKIgKAAIAABjIAKAAIAAAUIAeAAIAAgKIAKAAIAAgeIAUAAIAAAyIgKAAIAAAKgAvxBVIAAgKIgKAAIAAgKIgKAAIAAgUIgKAAIAAhZIAKAAIAAgUIAKAAIAAgKIAKAAIAAgKIBGAAIAAAUIAKAAIAAAUIAKAAIAABZIgKAAIAAAUIgKAAIAAAUgAvxAtIAKAAIAAAKIAKAAIAAAKIAeAAIAAgUIAKAAIAAhjIgKAAIAAgKIgeAAIAAAKIgKAAIAAAKIgKAAg");
	this.shape_5.setTransform(142,207.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(25,26,26,0.122)").s().p("AgEBQIAAifIAJAAIAACfg");
	this.shape_6.setTransform(70.5,207);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(8,8,8,0.039)").s().p("Az1BBIAAgKIgKAAIAAhtIAKAAIAAgKIAeAAIAAAKIAKAAIAAAKIAKAAIAABPIgKAAIAAAUIgKAAIAAAKgATOA3IAAgUIgKAAIAAhFIAKAAIAAgUIAKAAIAAgKIAUAAIAAAKIAKAAIAAAUIAKAAIAABFIgKAAIAAAUg");
	this.shape_7.setTransform(188,207.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(69,82,91,0.89)").s().p("AgnBVIAAgKIgKAAIAAgUIAAhtIAAgUIAKAAIAAgKIBFAAIAAAKIAKAAIAAAKIAKAAIAACBIgKAAIAAAKIgKAAIAAAKgAgdA3IAKAAIAAAKIAdAAIAAgKIAKAAIAAgUIAKAAIAAhPIgKAAIAAgKIgKAAIAAgKIgdAAIAAAKIgKAAg");
	this.shape_8.setTransform(63,207.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(68,84,94,0.969)").s().p("AAeBVIAAiLIgKAAIAAgKIgdAAIAAAKIgKAAIAAAKIgKAAIAACBIgUAAIAAgKIAAifIAUAAIAAAUIAKAAIAAgKIAKAAIAAgKIAxAAIAAAKIAKAAIAAAUIAACLg");
	this.shape_9.setTransform(76,207.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(72,76,79,0.514)").s().p("AgEA3IAAhtIAJAAIAABtg");
	this.shape_10.setTransform(98.5,210.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(71,84,92,0.859)").s().p("AAZBVIAAiLIgKAAIAAgKIgdAAIAAAKIgKAAIAAAeIgKAAIAABtIgUAAIAAipIAeAAIAAAKIAKAAIAAgKIAxAAIAAAKIAKAAIAAAUIAKAAIAACLg");
	this.shape_11.setTransform(101.5,207.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(68,81,89,0.839)").s().p("AgiBVIAAgKIgKAAIAAgUIgKAAIAAgUIAeAAIAAAKIAKAAIAAAUIAdAAIAAgKIAKAAIAAgeIgKAAIAAgKIgTAAIAAgKIgUAAIAAgJIgKAAIAAgKIgKAAIAAgyIAKAAIAAgKIAKAAIAAgKIA7AAIAAAKIAKAAIAAAKIAKAAIAAAeIgeAAIAAgUIgKAAIAAgKIgdAAIAAAoIATAAIAAAKIAUAAIAAAKIAKAAIAAAJIAKAAIAAAKIAKAAIAAAyIgKAAIAAAKIgKAAIAAAKg");
	this.shape_12.setTransform(113.5,207.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(68,69,72,0.42)").s().p("AgEBGIAAiLIAJAAIAACLg");
	this.shape_13.setTransform(143.5,206);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(74,77,80,0.514)").s().p("AgEAyIAAhjIAJAAIAABjg");
	this.shape_14.setTransform(160.5,207);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(67,83,92,0.941)").s().p("AAUBVIAAgKIgKAAIAAAKIgxAAIAAgKIgKAAIAAgUIAAiLIAUAAIAACLIAKAAIAAAKIAdAAIAAgKIAKAAIAAgKIAKAAIAAiBIAUAAIAACpg");
	this.shape_15.setTransform(149,207.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(70,83,91,0.859)").s().p("AgEBpIAAgKIgKAAIAAiLIgeAAIAAgUIAeAAIAAgoIAdAAIAAAoIAeAAIAAAUIgeAAIgKAAIAAB3IAKAAIAAAKIAeAAIAAAUg");
	this.shape_16.setTransform(137.5,205.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(72,84,91,0.827)").s().p("AgJBpIAAgKIgKAAIAAiLIgUAAIAAgUIAUAAIAAgoIAdAAIAAAoIAeAAIAAAUIgeAAIAAB3IAKAAIAAAKIAUAAIAAAUg");
	this.shape_17.setTransform(124,205.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(68,83,92,0.91)").s().p("AhABzIAAhGIAUAAIAAgKIAKAAIAAgKIAKAAIAAgUIAKAAIAAhFIgKAAIAAgKIgeAAIAAgoIBFAAIAUAAIAAAKIAKAAIAAAUIAKAAIAACpIAKAAIAAAUIg8AAIAAgKIgJAAIAAgoIgKAAIAAAUIgKAAIAAAUIgKAAIAAAKIgKAAIAAAKg");
	this.shape_18.setTransform(136.5,169.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(68,71,73,0.427)").s().p("AAZBzIAAjbIg7AAIAAgKIBFAAIAADlg");
	this.shape_19.setTransform(152.5,168.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(76,80,84,0.569)").s().p("AgOB4IAAjvIAKAAIAADlIATAAIAAAKg");
	this.shape_20.setTransform(91.5,204);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(69,82,91,0.871)").s().p("AgiBGIAAiLIBFAAIAACLg");
	this.shape_21.setTransform(121.5,164);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(75,80,85,0.627)").s().p("AgOB4IAAjvIAKAAIAADlIAJAAIAAjlIAKAAIAADvg");
	this.shape_22.setTransform(53.5,204);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(69,85,94,0.961)").s().p("AgdBuIAAjbIA7AAIAADbg");
	this.shape_23.setTransform(73,169);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(71,73,77,0.486)").s().p("AAZBzIAAjbIg7AAIAAgKIBFAAIAADlg");
	this.shape_24.setTransform(73.5,168.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(67,83,93,0.969)").s().p("AgdBuIAAjbIA7AAIAADbg");
	this.shape_25.setTransform(40,169);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(69,85,94,0.969)").s().p("AAoB4IAAhuIgKAAIg7AAIgKAAIAABuIgUAAIAAjvIAUAAIAABkIAKAAIA7AAIAKAAIAAhkIAUAAIAADvg");
	this.shape_26.setTransform(29,204);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(67,69,72,0.431)").s().p("AgsAZIAAgxIBZAAIAAAKIhPAAIAAAng");
	this.shape_27.setTransform(296.5,159.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(68,84,93,0.961)").s().p("AAZBpIhZAAIAAgoIA8AAIAAgUIAJAAIAAhZIgJAAIAAgKIgKAAIAAgKIgyAAIAAgoIBPAAIAeAAIAAAKIAKAAIAAAUIAKAAIAACfIgKAAIAAAKIgKAAIAAAKg");
	this.shape_28.setTransform(299.5,168.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(71,83,91,0.851)").s().p("AAZB4IAAiLIgKAAIAAgKIgdAAIAAAKIgKAAIAAAdIgKAAIAABuIgUAAIAAjvIAeAAIAABQIAKAAIAAgKIAxAAIAAAKIAKAAIAAAKIAKAAIAACVg");
	this.shape_29.setTransform(254.5,204);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(70,73,76,0.471)").s().p("AAZBQIAAiVIg7AAIAAgKIBFAAIAACfg");
	this.shape_30.setTransform(234.5,165);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(71,82,90,0.808)").s().p("AgTB4IAAiVIgUAAIAAgUIAUAAIAAgyIAKAAIAAgUIAxAAIAAAUIgUAAIAAAKIgKAAIAAAoIAeAAIAAAUIgeAAIAACVg");
	this.shape_31.setTransform(200,204);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(68,83,93,0.949)").s().p("AgxBuIAAgoIAeAAIAKAAIAAh3IgKAAIAAgKIgeAAIAAgyIBFAAIAAAKIAUAAIAAAKIAKAAIAADHg");
	this.shape_32.setTransform(200,168);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(61,69,69,0.333)").s().p("AgECbIAAk1IAJAAIAAE1g");
	this.shape_33.setTransform(240.5,84.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(68,82,91,0.89)").s().p("AgdBzIAAgKIgKAAIAAgKIgKAAIAAgUIAeAAIAAAKIAKAAIAAAKIAdAAIAAgKIAKAAIAAgyIgKAAIAAAKIgKAAIAAAKIgnAAIAAgKIgKAAIAAgKIgKAAIAAiBIAKAAIAAgKIAKAAIAAgKIAxAAIAAAKIAKAAIAAgKIAUAAIAADHIAAAUIgKAAIAAAKgAgdAFIAKAAIAAAUIAnAAIAAgUIAKAAIAAhFIgKAAIAAgUIgKAAIAAgKIgTAAIAAAKIgKAAIAAAUIgKAAg");
	this.shape_34.setTransform(313,210.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(69,82,90,0.847)").s().p("AgOB4IAAjRIg8AAIAAgeICVAAIAAAeIg8AAIAADRg");
	this.shape_35.setTransform(217.5,204);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(68,83,91,0.894)").s().p("AhFBzIAAgyIA8AAIAAgKIAJAAIAAhtIgJAAIAAgKIg8AAIAAgyIBZAAIAAAKIAUAAIAAAKIAUAAIAAAeIAKAAIAACLIgKAAIAAAUIgKAAIAAAKIgUAAIAAAKg");
	this.shape_36.setTransform(218,168.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(69,83,92,0.902)").s().p("AgJBpIAAgKIgKAAIAAiLIgUAAIAAgUIAUAAIAAgoIAdAAIAAAoIAeAAIAAAUIgeAAIAAAKIgKAAIAABjIAKAAIAAAKIAKAAIAAAKIAUAAIAAAUg");
	this.shape_37.setTransform(160,205.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(68,79,86,0.792)").s().p("AgdBzIAAgKIAKAAIAAhaIgKAAIAAgdIgKAAIAAgoIgKAAIAAgUIgKAAIAAgoIAeAAIAAAeIAKAAIAAAeIAKAAIAAAyIAJAAIAAAJIAKAAIAAgnIAKAAIAAgeIAKAAIAAgoIAKAAIAAgKIAUAAIAAAoIgKAAIAAAoIgKAAIAAAnIgKAAIAAAUIgKAAIAAAoIgKAAIAAAeIgKAAIAAAUg");
	this.shape_38.setTransform(326,210.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(22,129,133,0.984)").s().p("AifJYIiCAAIgUAAIAAgKIgKAAIAAgUIAAs9IAAgKIAKAAIAAgKIAKAAIAAgKICWAAIAAAKIAKAAIAAAKIAKAAIAAAKIAKAAIAACCIAKAAIAAAKIDRAAIAAgKIAKAAIAAgKIAKAAIAAmuIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKICMAAIAAAKIAUAAIAAAKIAKAAIAAAUIAAMzIAAAKIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKIiCAAIAAgKIgUAAIAAgKIgKAAIAAgUIgKAAIAAjSIgUAAIAAgKIjHAAIAAAKIgUAAIAAIIIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKg");
	this.shape_39.setTransform(132,75);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(22,129,133,0.98)").s().p("AhFBpIAAgKIgKAAIAAgKIgKAAIAAgKIgKAAIAAiVIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKICLAAIAAAKIAUAAIAAAUIAKAAIAAAUIAAB3IAAAKIgKAAIAAAUIgUAAIAAAKg");
	this.shape_40.setTransform(185,25.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(73,76,79,0.51)").s().p("AgEB4IAAjvIAJAAIAADvg");
	this.shape_41.setTransform(22.5,204);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(71,73,76,0.467)").s().p("AgEBGIAAiLIAJAAIAACLg");
	this.shape_42.setTransform(81.5,209);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(55,56,57,0.302)").s().p("AgEBBIAAiBIAJAAIAACBg");
	this.shape_43.setTransform(73.5,209.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(32,32,32,0.153)").s().p("AgEB4IAAgKIAAjlIAJAAIAADvg");
	this.shape_44.setTransform(93.5,204);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(74,77,81,0.522)").s().p("AgEB4IAAjvIAJAAIAADvg");
	this.shape_45.setTransform(35.5,204);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(36,37,37,0.18)").s().p("AgEA3IAAhtIAJAAIAABtg");
	this.shape_46.setTransform(32.5,210.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(53,53,54,0.278)").s().p("AgEAyIAAhjIAJAAIAABjg");
	this.shape_47.setTransform(25.5,197);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(52,52,53,0.275)").s().p("AgEA3IAAhtIAJAAIAABtg");
	this.shape_48.setTransform(25.5,210.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(68,83,92,0.918)").s().p("AIICRIAAgoIAKAAIAAgeIAKAAIAAgeIAKAAIAAgeIAKAAIAAgdIAKAAIAAgUIhaAAIAAhuIA8AAIAAA8IBkAAIAAA8IgKAAIAAAdIgKAAIAAAeIgKAAIAAAeIgKAAIAAAeIgKAAIAAAoIgKAAIAAAKgAphCRIAAgUIAKAAIAAgeIAKAAIAAgeIAKAAIAAgoIAKAAIAAgUIAKAAIAAgnIhQAAIAAhuIA8AAIAAA8IBaAAIAABQIgKAAIAAAdIgKAAIAAAeIgKAAIAAAeIgKAAIAAAeIgKAAIAAAeg");
	this.shape_49.setTransform(113,165.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(73,80,86,0.671)").s().p("AgEA3IAAhtIAJAAIAABtg");
	this.shape_50.setTransform(57.5,207.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(68,70,72,0.42)").s().p("AgECMIAAkXIAJAAIAAEXg");
	this.shape_51.setTransform(29.5,172);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(37,38,38,0.184)").s().p("AgEAyIAAhjIAJAAIAABjg");
	this.shape_52.setTransform(32.5,197);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(74,77,80,0.518)").s().p("AgiBzIAAjlIBFAAIAAAKIg7AAIAADbg");
	this.shape_53.setTransform(39.5,168.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(67,84,94,0.976)").s().p("AgdCRIAAkhIA7AAIAAAKIAAEXg");
	this.shape_54.setTransform(26,171.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(68,70,73,0.451)").s().p("AgEA3IAAhtIAJAAIAABtg");
	this.shape_55.setTransform(48.5,156.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(39,39,40,0.196)").s().p("AgEBVIAAipIAJAAIAACpg");
	this.shape_56.setTransform(94.5,171.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(77,81,85,0.553)").s().p("AgEBuIAAjbIAJAAIAADbg");
	this.shape_57.setTransform(83.5,169);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(63,65,67,0.38)").s().p("Ag7AFIgKAAIAAgJICLAAIAAAJg");
	this.shape_58.setTransform(90,157.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(65,67,69,0.404)").s().p("AgEBBIAAiBIAJAAIAACBg");
	this.shape_59.setTransform(151.5,205.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(68,81,89,0.847)").s().p("AgdBVIAAgKIgKAAIAAgKIgKAAIAAgUIgKAAIAAhZIAKAAIAAgUIAKAAIAAgKIAKAAIAAgKIA7AAIAAAKIAKAAIAAAKIAKAAIAAAKIAKAAIAABjIgKAAIAAAUIgKAAIAAAKIgKAAIAAAKgAgdAtIAKAAIAAAKIAKAAIAAAKIATAAIAAgKIAKAAIAAgKIAKAAIAAhZIgKAAIAAgKIgKAAIAAgKIgTAAIAAAKIgKAAIAAAKIgKAAg");
	this.shape_60.setTransform(300,207.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(61,62,64,0.345)").s().p("AgEBVIAAipIAJAAIAACpg");
	this.shape_61.setTransform(129.5,207.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(68,85,94,0.98)").s().p("AgJBVIAAipIATAAIAACpg");
	this.shape_62.setTransform(131,207.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(68,84,94,0.973)").s().p("AEnBuIAAjbIA8AAIAADbgAj0BuIAAipIgKAAIAAgKIgoAAIAACzIg8AAIAAjbICCAAIAUAAIAAAKIAKAAIAAAKIAKAAIAADHg");
	this.shape_63.setTransform(119.5,169);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(67,68,70,0.404)").s().p("AgEA8IAAh3IAJAAIAAB3g");
	this.shape_64.setTransform(138.5,207);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(64,66,68,0.4)").s().p("AgnAZIAAgxIBPAAIAAAKIhFAAIAAAng");
	this.shape_65.setTransform(134,159.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(70,83,84,0.424)").s().p("AgEBBIAAiBIAJAAIAACBg");
	this.shape_66.setTransform(164.5,125.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(76,100,101,0.557)").s().p("AhAAFIAAgJICBAAIAAAJg");
	this.shape_67.setTransform(154.5,135.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(77,93,95,0.494)").s().p("AgEGaIAAszIAJAAIAAMzg");
	this.shape_68.setTransform(164.5,60);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(75,97,98,0.533)").s().p("AhAAFIAAgJICBAAIAAAJg");
	this.shape_69.setTransform(109.5,135.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(21,129,133,0.992)").s().p("ABGEiIiLAAIgKAAIAAgKIgKAAIAAgKIgKAAIAAgUIAAk1IgKAAIAAgKIgKAAIAAgKIhaAAIAAgKIgUAAIAAgKIgKAAIAAgUIAAiCIAAgUIAKAAIAAgKIAKAAIAAgKIG3AAIAAAKIAKAAIAAAKIAKAAIAAAUIAACCIAAAUIgKAAIAAAKIgKAAIAAAKIhkAAIAAAKIgKAAIAAAKIgKAAIAAE1IAAAUIgKAAIAAAKIgKAAIAAAKg");
	this.shape_70.setTransform(230,75);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(74,116,119,0.729)").s().p("AgEGfIAAs9IAJAAIAAM9g");
	this.shape_71.setTransform(99.5,90.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(67,69,72,0.447)").s().p("AgEA3IAAhtIAJAAIAABtg");
	this.shape_72.setTransform(251.5,210.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(63,64,66,0.373)").s().p("AgEA8IAAh3IAJAAIAAB3g");
	this.shape_73.setTransform(265.5,210);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(69,84,93,0.933)").s().p("Ag2BzIAAgKIgKAAIAAgKIgKAAIAAgKIgKAAIAAgKIgKAAIAAizIA8AAIAACVIAKAAIAAAUIAKAAIAAAKIAnAAIAAiLIgdAAIAAgoIAJAAIAAgKIAyAAIAAAKIAUAAIAAAKIAKAAIAAAeIAKAAIAACBIgKAAIAAAUIgKAAIAAAKIgKAAIAAAKIgKAAIAAAKg");
	this.shape_74.setTransform(240.5,168.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(65,66,68,0.392)").s().p("AgEA8IAAh3IAJAAIAAB3g");
	this.shape_75.setTransform(198.5,169);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(77,82,87,0.624)").s().p("AgxAFIAAgJIBjAAIAAAJg");
	this.shape_76.setTransform(200,179.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(68,84,94,0.98)").s().p("AgdBuIAAjbIA7AAIAADbg");
	this.shape_77.setTransform(186,169);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(64,65,67,0.38)").s().p("AgiBzIAAjlIBFAAIAAAKIg7AAIAADbg");
	this.shape_78.setTransform(185.5,168.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(45,45,47,0.243)").s().p("AgEBkIAAjHIAJAAIAADHg");
	this.shape_79.setTransform(318.5,209);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(67,69,72,0.439)").s().p("AgEBGIAAiLIAJAAIAACLg");
	this.shape_80.setTransform(273.5,209);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(68,82,90,0.894)").s().p("AgEBzIAAgyIAJAAIAAAKIAeAAIAAgeIAKAAIAAhZIgKAAIAAgUIgeAAIAAAKIgJAAIAAAUIgKAAIAABFIgKAAIAABGIgKAAIAAAKIg8AAIAAhGIAKAAIAAhtIgKAAIAAgeIgKAAIAAgUIBGAAIAAAUIAKAAIAAAUIAKAAIAAgUIAKAAIAAgKIAJAAIAAgKIA8AAIAAAKIAUAAIAAAUIAKAAIAAAUIAKAAIAACLIgKAAIAAAUIgKAAIAAAKIgKAAIAAAKg");
	this.shape_81.setTransform(321.5,168.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(54,54,55,0.286)").s().p("AgEB4IAAjvIAJAAIAADvg");
	this.shape_82.setTransform(292.5,204);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(29,30,30,0.141)").s().p("AgEB4IAAjvIAJAAIAADvg");
	this.shape_83.setTransform(289.5,204);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(68,85,94,0.992)").s().p("AgJB4IAAjvIATAAIAADvg");
	this.shape_84.setTransform(291,204);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(74,78,82,0.557)").s().p("AgxAZIAAgxIAKAAIAAAnIBZAAIAAAKg");
	this.shape_85.setTransform(297,177.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(26,26,26,0.122)").s().p("AgECMIAAkXIAJAAIAAEXg");
	this.shape_86.setTransform(273.5,172);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(37,38,38,0.188)").s().p("AgEBuIAAjbIAJAAIAADbg");
	this.shape_87.setTransform(286.5,169);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(68,84,93,0.957)").s().p("AgdBzIAAjbIAAgKIA7AAIAAAKIAADbg");
	this.shape_88.setTransform(283,168.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(35,35,36,0.173)").s().p("AgEBuIAAjbIAJAAIAADbg");
	this.shape_89.setTransform(279.5,169);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#44555F").s().p("ArPEdIAAjmIAUAAIAADmgAxLEdIAAjmIAKAAIAADmgAQQgEIAAkYIA8AAIAAEYg");
	this.shape_90.setTransform(163,186.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("rgba(62,63,66,0.376)").s().p("AgiCWIAAkrIBFAAIAAAKIg7AAIAAEXIA7AAIAAAKg");
	this.shape_91.setTransform(269.5,172);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(68,83,92,0.922)").s().p("AAeBVIAAiLIgKAAIAAgKIgdAAIAAAKIgKAAIAAAUIgKAAIAAB3IgUAAIAAipIBZAAIAAAKIAKAAIAAAUIAACLg");
	this.shape_92.setTransform(268,207.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("rgba(52,57,57,0.263)").s().p("AgEA8IAAh3IAJAAIAAB3g");
	this.shape_93.setTransform(240.5,125);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(74,98,99,0.545)").s().p("AhFAFIAAgJICLAAIAAAJg");
	this.shape_94.setTransform(230,135.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("rgba(69,107,110,0.659)").s().p("AhFAFIAAgJICLAAIAAAJg");
	this.shape_95.setTransform(230,104.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("rgba(75,97,99,0.537)").s().p("AhAAFIAAgJICBAAIAAAJg");
	this.shape_96.setTransform(185.5,135.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(66,79,79,0.4)").s().p("AgEGVIAAspIAJAAIAAMpg");
	this.shape_97.setTransform(195.5,90.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("rgba(50,54,54,0.251)").s().p("AFAAFIAAgJIB4AAIAAAJgAm3AFIAAgJIB4AAIAAAJg");
	this.shape_98.setTransform(192,114.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(60,68,69,0.329)").s().p("AgEA8IAAh3IAJAAIAAB3g");
	this.shape_99.setTransform(219.5,125);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("rgba(58,65,65,0.314)").s().p("AgECbIAAk1IAJAAIAAE1g");
	this.shape_100.setTransform(219.5,84.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("rgba(73,110,113,0.675)").s().p("AgEBBIAAiBIAJAAIAACBg");
	this.shape_101.setTransform(205.5,56.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(69,113,116,0.706)").s().p("AgEBBIAAiBIAJAAIAACBg");
	this.shape_102.setTransform(254.5,56.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("rgba(20,129,133,0.996)").s().p("ABGG9IiBAAIgUAAIAAgKIgKAAIAAgUIgKAAIAAs9IAKAAIAAgKIAKAAIAAgKIAKAAIAAgKICLAAIAAAKIAUAAIAAAKIAKAAIAAAUIAAMpIAAAUIgKAAIAAAKIgKAAIAAAKg");
	this.shape_103.setTransform(185,90.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("rgba(59,67,68,0.325)").s().p("AgEA8IAAh3IAJAAIAAB3g");
	this.shape_104.setTransform(195.5,26);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(21,129,133,0.988)").s().p("AHCBkIiMAAIgKAAIAAgKIgKAAIAAgKIgKAAIAAgUIAAh3IAAgUIAKAAIAAgKIAKAAIAAgKIAUAAIB4AAIAKAAIAAAKIAUAAIAAAUIAKAAIAAAKIAAB3IAAAUIgKAAIAAAKIgKAAIAAAKgAk1BkIiCAAIgUAAIAAgKIgKAAIAAgUIgKAAIAAiLIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIB4AAIAUAAIAAAKIAKAAIAAAKIAKAAIAAAUIAACBIAAAKIgKAAIAAAKIgKAAIAAAKg");
	this.shape_105.setTransform(192,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logohit, new cjs.Rectangle(22,15,310,207), null);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.text = new cjs.Text(",טיפ קטן\n!חיסכון גדול", "bold 30px 'Calibri'", "#E6E5E5");
	this.text.textAlign = "center";
	this.text.lineHeight = 39;
	this.text.parent = this;
	this.text.setTransform(236.2132,-102.5,0.4583,0.4583);

	this.instance = new lib.Mesh();
	this.instance.setTransform(181,-106.55,0.2306,0.2306);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD9E9E").s().p("A+zNVQh3gBhUhUQhVhUAAh3IAAxpQAAh2BVhVQBUhVB3AAMA9mAAAQB3AABVBVQBVBVAAB2IAARpQAAB3hVBUQhVBUh3ABg");
	this.shape.setTransform(235.8379,-84.8868,0.2305,0.2305);

	this.instance_1 = new lib.Path_4();
	this.instance_1.setTransform(236.2,-84.75,0.2312,0.2312,0,0,0,255,109);
	this.instance_1.shadow = new cjs.Shadow("rgba(58,53,53,0.498)",4,4,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape},{t:this.instance},{t:this.text}]}).to({state:[]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-117.1,314.2,77);


(lib.money_bag1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// money_bag
	this.bag_txt = new cjs.Text("חיי \nמותרות", "bold 40px 'Calibri'", "#F1F1F1");
	this.bag_txt.name = "bag_txt";
	this.bag_txt.textAlign = "center";
	this.bag_txt.lineHeight = 49;
	this.bag_txt.lineWidth = 190;
	this.bag_txt.parent = this;
	this.bag_txt.setTransform(381.0561,1643.5,0.3583,0.3583);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CA9E67").s().p("AA/B7QAuhug8hSQhvAhhTgsQgNgfAXAHQgCgXAUABQBSBGBNhFQASgIgCAQQATgDgGANQAMAJgHAIQAcAXAOAYQAsBMgOBDIgXAAQAShDg3hUQAlBcgoBXg");
	this.shape.setTransform(384.6958,1597.1553);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0B93B").s().p("AgUDgIAAgmIglgTIgJASIgVAAIgQhqIAdAAQA4BsA4gkQAngyhPgyQhPgggdhRQgJhsBkgEIAAgyIAlAAIAAA1IAcARIAMgQIAWAAIATBiIgbAAQhLh1gxA9QgOAkBjA/QBNAkACBcQgOBbhQgCIAAAkg");
	this.shape_1.setTransform(380.7378,1622.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#936037").s().p("AglIsQiOgCh9gfIg5APQgpALgCgaQgDgaAbg+Qg5n6FIkPQBTAsBvghQA8BTguBuIAWAFQAohXglhdQA3BVgSBDIAXAAQAOhDgshNQEFD0gcH3IAQA6QAKAwgrgFIhVgOQhqAciWAAIhCgBgAgYCsIAAAnIAmAAIAAgkQBRACAOhbQgChchOgkQhjg/AOgkQAyg9BLB1IAaAAIgThiIgWAAIgLAPIgcgQIAAg1IgmAAIAAAxQhkAFAJBsQAeBRBOAfQBQAygnAzQg4Akg5hsIgcAAIAQBpIAVAAIAJgRgAhRmEQgYhFg6g9QgDghAkgFQAvAVAwgVQAcAVASgVQAgAVAcgVQAeAVAOgSQAwACgGAiQhRBOACA0QgnAignAAQgoAAgpgjg");
	this.shape_2.setTransform(381.0586,1623.3912);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E0B93B").s().p("AgUDZIAAgmIgjgRIgIAQIgVAAIgPhmIAbAAQA3BpA2gjQAlgxhMgxQhMgegchOQgJhoBggEIAAgvIAkAAIAAAyIAbAQIAMgPIAVAAIASBfIgaAAQhIhxgvA7QgOAjBgA9QBKAhACBaQgOBYhNgDIAAAkg");
	this.shape_3.setTransform(380.7116,1621.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CA9E67").s().p("AA9B2QAshqg6hOQhqAghRgsQgMgdAVAHQgBgWATABQBPBDBKhDQARgHgCAQQATgDgGAMQAMAIgGAIQAaAXANAXQArBIgNBCIgWgBQAQhAg0hRQAkBZgnBUg");
	this.shape_4.setTransform(384.5475,1597.7553);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#936037").s().p("AgkIYQiIgCh6gdIg2AOQgoAKgCgZQgCgZAZg7Qg3noE9kGQBQArBrggQA6BQgtBqIAWAFQAmhUgkhaQA1BSgRBBIAWAAQANhBgqhJQD8DqgbHlIAQA4QAJAvgpgFIhSgOQhmAbiPAAIhCgBgAgXCmIAAAmIAlAAIAAgjQBNACANhYQgBhYhLgjQhgg9AOgjQAwg7BIByIAaAAIgThgIgVAAIgLAQIgbgQIAAgzIgkAAIAAAvQhhAFAJBoQAdBOBLAeQBNAwgmAxQg2Ajg2hpIgcAAIAQBmIAUAAIAJgQgAhPl2QgWhDg4g6QgDggAjgFQAtAUAugUQAbAUARgUQAfAUAbgUQAdAUANgRQAuACgFAhQhOBLACAyQglAhgmAAQgnAAgogig");
	this.shape_5.setTransform(381.0523,1623.0436);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F1F1F1").s().p("Ag9EyIAAgoIglgSIgJARIgVAAIgQhrIAdAAQA5BuA6gkQAng0hRgzQhQgggehUQgJhsBlgFIAAgyIAoAAIAAA2IAbAQIAMgQIAWAAIAUBkIgbAAQhNh3gyA/QgOAkBmBAQBNAkACBfQgOBchRgCIAAAlgABAgyQAvhvg9hVQhwAihVguQgNgfAWAIQgBgYAUABQBUBIBOhHQASgIgCARQAUgDgHANQANAIgHAJQAcAXAOAZQAtBOgOBEIgXAAQARhEg3hXQAmBfgpBZg");
	this.shape_6.setTransform(384.7309,1616.2578);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E6E5E5").s().p("AglI2QiRgCiAgfIg5APQgqALgCgbQgDgaAbg/Qg6oDFOkVQBVAuBxgiQA9BVgvBvIAXAGQAohZgmhfQA4BXgSBEIAXAAQAOhEgshOQEJD4gcIAIARA7QAKAxgsgFIhWgOQhtAciZAAIhCgBgAgYCvIAAAoIAnAAIAAglQBRACAPhcQgChehPgkQhlhBAOgkQAzg/BMB4IAbAAIgThlIgWAAIgMAQIgdgQIAAg2IgmAAIAAAyQhmAFAJBtQAeBTBQAgQBRAzgoA0Qg4Akg6huIgdAAIAQBrIAWAAIAJgRgAhTmLQgXhGg8g+QgCgiAkgFQAwAVAwgVQAcAWATgWQAhAVAcgVQAfAVAOgSQAxACgGAjQhSBQABA0QgnAjgoAAQgpAAgqgkg");
	this.shape_7.setTransform(381.0906,1625.3912);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.bag_txt,p:{scaleX:0.3583,scaleY:0.3583,x:381.0561,y:1643.5}}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.bag_txt,p:{scaleX:0.3455,scaleY:0.3455,x:381.005,y:1641.25}}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.bag_txt,p:{scaleX:0.3648,scaleY:0.3648,x:381.0248,y:1644.55}}]},1).wait(1));

	// highlight
	this.instance = new lib.bag_heigh();
	this.instance.setTransform(380.9,1624.35,1,1,0,0,0,0,-0.1);
	this.instance.shadow = new cjs.Shadow("rgba(204,153,0,1)",0,0,60);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(278.9,1507.6,209,238);


(lib.Instructions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.text = new cjs.Text("הוראות למשתמש", "bold 16px 'Calibri'", "#E6E5E5");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 120;
	this.text.parent = this;
	this.text.setTransform(2.55,-11.15);

	this.instance = new lib.Path_2();
	this.instance.setTransform(2.5,0,0.409,0.409,0,0,0,179.3,59.1);
	this.instance.shadow = new cjs.Shadow("rgba(58,53,53,0.498)",4,4,12);

	this.text_1 = new cjs.Text("?איך זה עובד\n\nמעבר על גבי השקים והמטבעות\nיציג בפניכם את משמעותם\n ואת הקטגוריות המתקשרות \nאליהם\n\nלחיצה על מטבע תציג בפניכם שלושה טיפים בנושא שיסייעו לכם !לחסוך\n\nלחזרה למצב ההתחלתי יש ללחוץ על האיקס או לחיצה נוספת על האובייקט הלחוץ", "bold 10px 'Calibri'", "#E6E5E5");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 135;
	this.text_1.parent = this;
	this.text_1.setTransform(76,27.35);

	this.text_2 = new cjs.Text("?חיפשתם טיפים לחיסכון \n!הגעתם למקום הנכון", "bold 12px 'Calibri'", "#E6E5E5");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 17;
	this.text_2.lineWidth = 135;
	this.text_2.parent = this;
	this.text_2.setTransform(1.3,-8.45);

	this.instance_1 = new lib.Path_3();
	this.instance_1.setTransform(4.05,115.3,0.3484,0.4359,0,0,0,229.3,331.9);
	this.instance_1.shadow = new cjs.Shadow("rgba(58,53,53,0.498)",4,4,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text,p:{x:2.55,y:-11.15,text:"הוראות למשתמש",font:"bold 16px 'Calibri'",textAlign:"center",lineHeight:21.55,lineWidth:120}}]}).to({state:[{t:this.instance},{t:this.text,p:{x:2.55,y:-11.15,text:"הוראות למשתמש",font:"bold 16px 'Calibri'",textAlign:"center",lineHeight:21.55,lineWidth:120}}]},1).to({state:[{t:this.instance_1},{t:this.text_2},{t:this.text_1},{t:this.text,p:{x:-8.55,y:222.15,text:"!חקרו ותהנו\n!בהצלחה",font:"bold 10px 'Calibri'",textAlign:"right",lineHeight:14.2,lineWidth:51}}]},1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("A4PH+QhDAAgwgwQgwgwAAhDIAAq1QAAhDAwgwQAwgwBDAAMAwfAAAQBDAAAwAwQAwAwAABDIAAK1QAABDgwAwQgwAwhDAAg");
	this.shape.setTransform(4.1575,1.133,0.4263,0.4864);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82,-34.8,184,311);


(lib.graycoin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(1).call(this.frame_12).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AiLCMIgHgIIgCgBQgagdgMgjIgCgIQgIgbAAggIAAgIIAAgBQACgrARgjQAOgcAYgXQAMgNAMgIQAsghA3gEIAJgBIAHAAQAbAAAZAHIADABQAnALAgAbIADADIAKAKQA7A5AABRQAABSg7A6Qg6A6hRgBQhRABg6g6g");
	this.shape.setTransform(-33,-103.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6F6F6").s().p("AjLCcIA/g0QAMAjAaAdIg2A7QgeghgRgmgAjgBRQgCgSAAgSIABgPID6j+IAUgBQAUAAATACIAKABIg5A/IgIAAQg2AFgsAgQgMAJgMAMQgYAYgOAbQgSAkgCAqIAAABIhHA/IgCgLgACshyQgggagngLIA3g0QAjAQAeAbIAGAEIg0AtIgDgDg");
	this.shape_1.setTransform(-37.575,-106.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E6E5E5").s().p("Ai/DAIgKgLIA2g6IACABIAHAIQA6A6BRgBQBRABA6g6QA6g6AAhRQAAhSg6g5IgKgKIA0gtIAKAKQBPBPAABwQAABwhPBQQhQBPhwAAQhwAAhPhPgAj8BmQgKgbgFgdIBHg+IAAAJQAAAfAJAbIACAIIg/A0IgEgJgAkNgZQAIhgBGhGQBDhDBagLIAPgBIj7EAIABgLgAA1jGQgZgHgbAAIgIAAIA4g+QAdAFAaALIAHADIg3AzIgDgBg");
	this.shape_2.setTransform(-33.075,-102.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F6F6F6").s().p("AjUCRIA/g0IABACIAgA2IAFAHIg2A7QgeghgRglgACjh9QgfgagogMIA3gzQAjAPAeAbIguAyIgDgDg");
	this.shape_3.setTransform(-36.7,-82.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AgBDjQg5gLgrgrIgIgIIgBgBIgGgIIgfg1IgBgDIg/A0IA8g7QgIgcAAggIAAgJIhHBAIgCgMQgCgRAAgSIAAgPID6j/IAUgBQAVAAATADIAKABIg5A/IgHAAQAiAAAWAEIALACIAEABQAoAMAeAaIAEADIAKAKQA6A5AABRQAABSg6A6Qg6A6hSAAg");
	this.shape_4.setTransform(-36.75,-83.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E6E5E5").s().p("Ai/DAIgKgLIA2g7IACACIAHAIQArArA5ALIAnADQBRAAA6g5QA6g6AAhRQAAhSg6g6IAqg2IAKAJQBPBQAABwQAABwhPBQQhQBPhwAAQhwAAhPhPgAkLAvIBHg/IAAAJQAAAfAJAbIg9A8QgOgkgFgcgAkNgZQAIhhBGhGQBDhCBpgMIj7EAIABgLgAA1jGIgMgDQgWgDggAAIAGAAIA4g/QAdAFAaALIgwA2IgDgBg");
	this.shape_5.setTransform(-33.075,-79.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6F6F6").s().p("AjUCRIA/g0IABACIAgA2IAFAHIg2A7QgegggRgmgACjh9QgfgagogMIA3gzQAjAPAeAbIguAxIgDgCg");
	this.shape_6.setTransform(-36.7,-59.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCCCCC").s().p("AgBDjQg5gLgrgrIgIgIIgBgBIgGgHIgfg2IgBgDIg/A0IA8g7QgIgcAAggIAAgJIhHBAIgCgMQgCgRAAgSIAAgPID6j/IAUgBQAVAAATADIAKABIg5A/IgHAAQAiAAAWAEIALACIAEABQAoAMAeAaIAEADIAKAKQA6A5AABRQAABSg6A6Qg6A6hSAAg");
	this.shape_7.setTransform(-36.75,-60.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E6E5E5").s().p("Ai/DAIgKgLIA2g7IACACIAHAIQArArA5ALIAnAEQBRAAA6g6QA6g6AAhRQAAhSg6g6IAqg2IAKAJQBPBQAABwQAABwhPBQQhQBPhwAAQhwAAhPhPgAkLAvIBHg/IAAAJQAAAfAJAbIg9A8QgOgkgFgcgAkNgZQAIhhBGhGQBDhCBpgMIj7EAIABgLgAA1jGIgMgDQgWgDggAAIAGAAIA4g/QAdAFAaALIgwA2IgDgBg");
	this.shape_8.setTransform(-33.075,-56.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F6F6F6").s().p("AjUCQIA/gzIABADIAgA1IAFAIIg2A6QgeghgRgmgACjh9QgfgagogMIA3gzQAjAQAeAaIguAyIgDgDg");
	this.shape_9.setTransform(-36.7,-36.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E6E5E5").s().p("Ai/C/IgKgKIA2g6IACABIAHAIQArArA5ALIAnADQBRAAA6g5QA6g6AAhRQAAhSg6g5IAqg3IAKAKQBPBPAABwQAABwhPBPQhQBQhwAAQhwAAhPhQgAkLAuIBHg+IAAAJQAAAfAJAcIg9A6QgOgjgFgdgAkNgZQAIhgBGhGQBDhDBpgMIj7D/IABgKgAA1jGIgMgCQgWgEggAAIAGgBIA4g+QAdAFAaALIgwA2IgDgBg");
	this.shape_10.setTransform(-33.075,-33.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F6F6F6").s().p("AjUCQIA/gzIABACIAgA2IAFAIIg2A6QgeghgRgmgACjh9QgfgagogMIA3gzQAjAQAeAaIguAyIgDgDg");
	this.shape_11.setTransform(-36.7,-13.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E6E5E5").s().p("Ai/C/IgKgKIA2g6IACABIAHAIQArArA5ALIAnADQBRABA6g6QA6g6AAhRQAAhSg6g5IAqg3IAKAKQBPBPAABwQAABwhPBPQhQBQhwAAQhwAAhPhQgAkLAuIBHg+IAAAJQAAAfAJAcIg9A6QgOgjgFgdgAkNgZQAIhgBGhGQBDhEBpgLIj7D/IABgKgAA1jGIgMgCQgWgEggAAIAGgBIA4g+QAdAFAaALIgwA2IgDgBg");
	this.shape_12.setTransform(-33.075,-10.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E6E5E5").s().p("Ai/DAIgKgLIA2g7IACACIAHAIQA6A5BRAAQBRAAA6g5QA6g6AAhRQAAhSg6g6IgKgJIA0gtIAKAJQBPBQAABwQAABwhPBQQhQBPhwAAQhwAAhPhPgAj8BmQgKgbgFgcIBHg/IAAAJQAAAfAJAbIACAIIg/A0IgEgJgAkNgZQAIhhBGhGQBDhCBagLIAPgBIj7EAIABgLgAA1jGQgZgHgbABIgIAAIA4g/QAdAFAaALIAHADIg3AzIgDgBg");
	this.shape_13.setTransform(-33.075,-36.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCCCCC").s().p("AiLCMIgHgIIgCgCQgagcgMgjIgCgIQgIgbAAggIAAgIIAAgBQACgrARgjQAOgcAYgYQAMgMAMgIQAsghA3gEIAJAAIAHAAQAbgBAZAHIADABQAnALAgAbIADADIAKAJQA7A6AABRQAABSg7A6Qg6A5hRAAQhRAAg6g5g");
	this.shape_14.setTransform(-33,-36.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F6F6F6").s().p("AjLCcIA/g0QAMAjAaAdIg2A6QgegggRgmgAjgBRQgCgSAAgSIABgPID6j+IAUgBQAUAAATACIAKABIg5A/IgIAAQg2AFgsAgQgMAJgMAMQgYAYgOAbQgSAkgCAqIAAAAIhHBAIgCgLgACshyQgggagngLIA3g0QAjAQAeAbIAGAEIg0AtIgDgDg");
	this.shape_15.setTransform(-37.575,-40.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F6F6F6").s().p("AjUCQIA/gzIABADIAgA1IAFAHIg2A7QgegggRgngACjh9QgfgagogMIA3gzQAjAPAeAbIguAxIgDgCg");
	this.shape_16.setTransform(-36.7,-22.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E6E5E5").s().p("Ai/DAIgKgLIA2g7IACACIAHAIQArArA5ALIAnAEQBRgBA6g5QA6g6AAhRQAAhSg6g6IAqg2IAKAJQBPBQAABwQAABwhPBQQhQBPhwAAQhwAAhPhPgAkLAvIBHg/IAAAJQAAAfAJAbIg9A7QgOgjgFgcgAkNgZQAIhgBGhHQBDhDBpgLIj7D/IABgKgAA1jGIgMgDQgWgDggAAIAGAAIA4g/QAdAFAaALIgwA2IgDgBg");
	this.shape_17.setTransform(-33.075,-19.15);

	this.txt_gray = new lib.txt_gray();
	this.txt_gray.setTransform(-32.9,19.7,1,1,0,0,0,18.7,16.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCCCCC").s().p("AiLCMIgHgIIgCgBQgagdgMgjIgCgIQgIgbAAggIAAgIIAAgBQACgrARgjQAOgcAYgYQAMgMAMgIQAsghA3gEIAJAAIAHAAQAbgBAZAHIADABQAnALAgAbIADADIAKAJQA7A6AABRQAABSg7A6Qg6A5hRAAQhRAAg6g5g");
	this.shape_18.setTransform(-33,13.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E6E5E5").s().p("Ai/DAIgKgLIA2g6IACABIAHAIQA6A5BRAAQBRAAA6g5QA6g6AAhRQAAhSg6g6IgKgJIA0gtIAKAJQBPBQAABwQAABwhPBQQhQBPhwAAQhwAAhPhPgAj8BmQgKgbgFgcIBHg/IAAAJQAAAfAJAbIACAIIg/A0IgEgJgAkNgZQAIhhBGhGQBDhCBagLIAPgBIj7EAIABgLgAA1jGQgZgHgbABIgIAAIA4g/QAdAFAaALIAHADIg3AzIgDgBg");
	this.shape_19.setTransform(-33.075,14.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F6F6F6").s().p("AjLCcIA/g0QAMAjAaAdIg2A6QgegggRgmgAjgBRQgCgSAAgSIABgPID6j+IAUgBQAUAAATACIAKABIg5A/IgIAAQg2AFgsAgQgMAJgMAMQgYAYgOAbQgSAkgCAqIAAABIhHA/IgCgLgACshyQgggagngLIA3g0QAjAQAeAbIAGAEIg0AtIgDgDg");
	this.shape_20.setTransform(-37.575,10.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("AimCmIgIgJIgCgCQgfgigOgpIgCgJQgLghABgmIAAgKIAAAAQACgzAVgrQARghAbgcQAPgOAPgLQAzgmBCgFIAKgBIAJAAQAgAAAeAIIAEABQAuANAlAgIAEADQAHAGAFAGQBFBFABBgQgBBhhFBFQhEBFhhAAQhhAAhFhFg");
	this.shape_21.setTransform(-33,13.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F6F6F6").s().p("AjxC5IBLg9QAOApAfAjIhBBFQgjgngUgtgAkKBgQgCgVAAgWIAAgRIEpkuQAMgCAMAAQAYAAAXADIAMACIhEBKIgKAAQhAAGg0AmQgPAKgOAPQgcAcgRAhQgVAqgCAyIAAABIhVBMIgCgOgADMiHQgmgggugNIBCg8QAoASAlAfIAGAHIg+A0IgDgDg");
	this.shape_22.setTransform(-38.425,9.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E6E5E5").s().p("AjjDjIgMgMIBAhGIACACIAIAKQBFBEBhAAQBhAABEhEQBFhFAAhhQAAhhhFhEQgFgHgHgFIA+g1IAMALQBeBfAACFQAACFheBeQhfBfiFAAQiFAAhehfgAkrB5QgNgggFgiIBUhKIAAAKQAAAlAKAhIADAJIhLA9IgEgKgAlAgeQAJhzBUhTQBPhPBsgNIARgBIkqEwIABgNgAA/jrQgegIggAAIgJAAIBChKQAiAGAgANIAIADIhBA9IgEgBg");
	this.shape_23.setTransform(-33.075,14.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2,p:{y:-102.35}},{t:this.shape_1,p:{y:-106.9}},{t:this.shape,p:{y:-103.15}}]}).to({state:[{t:this.shape_5},{t:this.shape_4,p:{y:-83.425}},{t:this.shape_3}]},1).to({state:[{t:this.shape_8,p:{y:-56.25}},{t:this.shape_7,p:{y:-60.375}},{t:this.shape_6,p:{y:-59.65}}]},1).to({state:[{t:this.shape_10,p:{y:-33.25}},{t:this.shape_4,p:{y:-37.375}},{t:this.shape_9,p:{y:-36.65}}]},1).to({state:[{t:this.shape_4,p:{y:-14.325}},{t:this.shape_12,p:{y:-10.2}},{t:this.shape_11}]},1).to({state:[{t:this.shape_1,p:{y:8.3}},{t:this.shape,p:{y:12.05}},{t:this.shape_2,p:{y:12.85}}]},1).to({state:[{t:this.shape_4,p:{y:-7.575}},{t:this.shape_12,p:{y:-3.45}},{t:this.shape_9,p:{y:-6.85}}]},1).to({state:[{t:this.shape_7,p:{y:-23.925}},{t:this.shape_8,p:{y:-19.8}},{t:this.shape_6,p:{y:-23.2}}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_7,p:{y:-23.275}},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_4,p:{y:-6.325}},{t:this.shape_10,p:{y:-2.2}},{t:this.shape_9,p:{y:-5.6}}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.txt_gray}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.txt_gray}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.3,-129.5,64.5,176.5);


(lib.coin1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// coin
	this.coin_txt = new cjs.Text("חשמל", "bold 13px 'Calibri'", "#F1F1F1");
	this.coin_txt.name = "coin_txt";
	this.coin_txt.textAlign = "center";
	this.coin_txt.lineHeight = 16;
	this.coin_txt.lineWidth = 46;
	this.coin_txt.parent = this;
	this.coin_txt.setTransform(230.1,75.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FED80F").s().p("Ai3C3IgJgKIA0g4IABABIAHAIQA3A3BOAAQBOAAA3g3QA3g3AAhNQAAhPg3g3IgKgJIAxgrIAKAKQBMBLAABrQAABrhMBMQhMBMhrAAQhrAAhMhMgAjxBhQgKgZgEgcIBEg7IAAAJQAAAdAIAbIACAHIg8AxIgEgJgAkCgXQAIhcBDhDQBAhBBXgKIANgBIjvD1IAAgKgAAyi9QgYgHgZAAIgHABIA1g8QAbAFAZAKIAHADIg0AxIgEgBg");
	this.shape.setTransform(229.975,83.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEF064").s().p("AjCCVIA9gxQALAhAZAcIg0A4QgdgfgQglgAjVBNQgCgQAAgRIAAgPIDuj0IAUAAQATgBATADIAKABIg3A8IgIABQg0AEgqAfQgMAJgLAKQgWAXgNAbQgSAigCAoIAAAAIhEA9IgBgLgACkhsQgegaglgKIA0gyQAiAPAdAaIAFAEIgyArIgDgCg");
	this.shape_1.setTransform(225.65,79.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4B500").s().p("AiFCGIgHgIIgBgBQgZgcgLghIgDgHQgIgbAAgdIAAgJIAAAAQACgpASgiQANgbAWgXQAMgKAMgJQApgfA1gEIAIgBIAHAAQAaAAAYAHIADABQAlAKAfAaIADACIAKAJQA3A4AABOQAABOg3A3Qg4A3hOAAQhNAAg4g3g");
	this.shape_2.setTransform(230.025,83.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4B500").s().p("AiJCLIgIgIIgBgBQgagdgNgjIgCgHQgIgbgBggIABgIIAAgBQACgqASgkQAOgbAYgYQALgLAMgKQAsgfA2gFIAJAAIAHAAQAbAAAZAGIADABQAnALAgAbIACACIALAKQA5A6ABBQQgBBRg5A6Qg5A5hSAAQhQAAg5g5g");
	this.shape_3.setTransform(230,84.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEF064").s().p("AjKCbIA/gzQAMAiAaAdIg2A6QgeghgRglgAjeBQQgCgSAAgRIAAgPID4j+IAVAAQAUAAATADIAKABIg5A+IgJABQg1AEgrAgQgNAJgLALQgYAYgOAcQgSAjgCApIAAABIhHA/IgBgLgACrhxQgggbgmgLIA2gyQAjAQAeAZIAFAFIgzAtIgDgDg");
	this.shape_4.setTransform(225.475,80.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FED80F").s().p("Ai+C+IgKgKIA2g6IABABIAIAIQA6A6BQgBQBRABA5g6QA6g6AAhQQAAhRg6g6IgKgJIA0gtIAKAKQBPBPgBBvQABBwhPBOQhQBPhvAAQhvAAhPhPgAj6BlQgLgagEgdIBHg+IgBAJQAAAfAJAcIACAHIg/AzIgDgJgAkMgZQAIhgBGhFQBChCBagLIAOgCIj4D/IAAgLgAA0jFQgYgGgbAAIgHAAIA3g+QAcAFAbAKIAHAEIg3AyIgEgBg");
	this.shape_5.setTransform(229.95,84.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E6E5E5").s().p("AiFCGIgHgIIgBgBQgZgcgLghIgDgHQgIgaAAgfIAAgHIAAgBQACgpASgjQANgaAWgWQAMgMAMgIQApgfA1gEIAIAAIAHgBQAaAAAYAHIADABQAlAKAfAaIACACIALAKQA3A3AABNQAABPg3A3Qg4A3hOAAQhNAAg4g3g");
	this.shape_6.setTransform(229.925,84);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F1F1F1").s().p("Ai3C3IgJgKIA0g4IABABIAHAIQA3A3BNAAQBPAAA3g3QA3g3AAhOQAAhNg3g4IgKgKIAxgqIAKAKQBMBLAABrQAABrhMBMQhMBMhrAAQhrAAhMhMgAjxBhQgKgZgEgcIBEg7IAAAIQAAAeAIAbIACAGIg8AyIgEgJgAkCgYQAIhbBDhDQBAhABWgLIAOgBIjvD1IAAgLgAAyi9QgYgHgaAAIgGABIA1g8QAbAFAZAKIAHADIg0AxIgEgBg");
	this.shape_7.setTransform(229.875,84.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6F6F6").s().p("AjCCVIA9gxQALAhAZAcIg0A4QgdgfgQglgAjVBNQgCgQAAgRIAAgPIDujzIAUgBQATgBATADIAKABIg3A9IgIAAQg0AEgqAfQgMAIgLAMQgXAWgMAaQgSAjgCAoIAAABIhEA8IgBgLgAClhsQgfgaglgKIA0gyQAiAPAcAaIAGAEIgyArIgCgCg");
	this.shape_8.setTransform(225.55,80.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.coin_txt,p:{scaleX:1,scaleY:1,x:230.1,y:75.5,font:"bold 13px 'Calibri'",lineHeight:15.9,lineWidth:46}}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.coin_txt,p:{scaleX:0.3214,scaleY:0.3214,x:229.8613,y:75.25,font:"bold 40px 'Calibri'",lineHeight:48.85,lineWidth:109}}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.coin_txt,p:{scaleX:0.3091,scaleY:0.3091,x:229.8255,y:75.5,font:"bold 40px 'Calibri'",lineHeight:48.85,lineWidth:109}}]},1).wait(1));

	// highlight
	this.instance = new lib.coin_heigh();
	this.instance.setTransform(229.9,84.8);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,60);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(140,-5.1,184,184);


(lib.coin_long = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// coin
	this.coin_txt = new cjs.Text("עשה זאת בעצמך", "bold 9px 'Calibri'", "#F1F1F1");
	this.coin_txt.name = "coin_txt";
	this.coin_txt.textAlign = "center";
	this.coin_txt.lineHeight = 11;
	this.coin_txt.lineWidth = 37;
	this.coin_txt.parent = this;
	this.coin_txt.setTransform(230.1,74.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FED80F").s().p("Ai3C3IgJgKIA0g4IABABIAHAIQA3A3BOAAQBOAAA3g3QA3g3AAhNQAAhPg3g3IgKgJIAxgrIAKAKQBMBLAABrQAABrhMBMQhMBMhrAAQhrAAhMhMgAjxBhQgKgZgEgcIBEg7IAAAJQAAAdAIAbIACAHIg8AxIgEgJgAkCgXQAIhcBDhDQBAhBBXgKIANgBIjvD1IAAgKgAAyi9QgYgHgZAAIgHABIA1g8QAbAFAZAKIAHADIg0AxIgEgBg");
	this.shape.setTransform(229.975,83.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEF064").s().p("AjCCVIA9gxQALAhAZAcIg0A4QgdgfgQglgAjVBNQgCgQAAgRIAAgPIDuj0IAUAAQATgBATADIAKABIg3A8IgIABQg0AEgqAfQgMAJgLAKQgWAXgNAbQgSAigCAoIAAAAIhEA9IgBgLgACkhsQgegaglgKIA0gyQAiAPAdAaIAFAEIgyArIgDgCg");
	this.shape_1.setTransform(225.65,79.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4B500").s().p("AiFCGIgHgIIgBgBQgZgcgLghIgDgHQgIgbAAgdIAAgJIAAAAQACgpASgiQANgbAWgXQAMgKAMgJQApgfA1gEIAIgBIAHAAQAaAAAYAHIADABQAlAKAfAaIADACIAKAJQA3A4AABOQAABOg3A3Qg4A3hOAAQhNAAg4g3g");
	this.shape_2.setTransform(230.025,83.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4B500").s().p("AiJCLIgIgIIgBgBQgagdgNgjIgCgHQgIgbgBggIABgIIAAgBQACgqASgkQAOgbAYgYQALgLAMgKQAsgfA2gFIAJAAIAHAAQAbAAAZAGIADABQAnALAgAbIACACIALAKQA5A6ABBQQgBBRg5A6Qg5A5hSAAQhQAAg5g5g");
	this.shape_3.setTransform(230,84.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEF064").s().p("AjKCbIA/gzQAMAiAaAdIg2A6QgeghgRglgAjeBQQgCgSAAgRIAAgPID4j+IAVAAQAUAAATADIAKABIg5A+IgJABQg1AEgrAgQgNAJgLALQgYAYgOAcQgSAjgCApIAAABIhHA/IgBgLgACrhxQgggbgmgLIA2gyQAjAQAeAZIAFAFIgzAtIgDgDg");
	this.shape_4.setTransform(225.475,80.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FED80F").s().p("Ai+C+IgKgKIA2g6IABABIAIAIQA6A6BQgBQBRABA5g6QA6g6AAhQQAAhRg6g6IgKgJIA0gtIAKAKQBPBPgBBvQABBwhPBOQhQBPhvAAQhvAAhPhPgAj6BlQgLgagEgdIBHg+IgBAJQAAAfAJAcIACAHIg/AzIgDgJgAkMgZQAIhgBGhFQBChCBagLIAOgCIj4D/IAAgLgAA0jFQgYgGgbAAIgHAAIA3g+QAcAFAbAKIAHAEIg3AyIgEgBg");
	this.shape_5.setTransform(229.95,84.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E6E5E5").s().p("AiFCGIgHgIIgBgBQgZgcgLghIgDgHQgIgaAAgfIAAgHIAAgBQACgpASgjQANgaAWgWQAMgMAMgIQApgfA1gEIAIAAIAHgBQAaAAAYAHIADABQAlAKAfAaIACACIALAKQA3A3AABNQAABPg3A3Qg4A3hOAAQhNAAg4g3g");
	this.shape_6.setTransform(229.925,84);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F1F1F1").s().p("Ai3C3IgJgKIA0g4IABABIAHAIQA3A3BNAAQBPAAA3g3QA3g3AAhOQAAhNg3g4IgKgKIAxgqIAKAKQBMBLAABrQAABrhMBMQhMBMhrAAQhrAAhMhMgAjxBhQgKgZgEgcIBEg7IAAAIQAAAeAIAbIACAGIg8AyIgEgJgAkCgYQAIhbBDhDQBAhABWgLIAOgBIjvD1IAAgLgAAyi9QgYgHgaAAIgGABIA1g8QAbAFAZAKIAHADIg0AxIgEgBg");
	this.shape_7.setTransform(229.875,84.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6F6F6").s().p("AjCCVIA9gxQALAhAZAcIg0A4QgdgfgQglgAjVBNQgCgQAAgRIAAgPIDujzIAUgBQATgBATADIAKABIg3A9IgIAAQg0AEgqAfQgMAIgLAMQgXAWgMAaQgSAjgCAoIAAABIhEA8IgBgLgAClhsQgfgaglgKIA0gyQAiAPAcAaIAGAEIgyArIgCgCg");
	this.shape_8.setTransform(225.55,80.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.coin_txt}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.coin_txt}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.coin_txt}]},1).wait(1));

	// Layer_2
	this.instance = new lib.coin_heigh();
	this.instance.setTransform(229.4,84.7);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,60);
	this.instance._off = true;
	this.instance.cache(-29,-29,58,58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(139.5,-5.2,184,184);


(lib.coin_info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}
	this.frame_26 = function() {
		this.stop();
	}
	this.frame_35 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		this.stop();
	}
	this.frame_53 = function() {
		this.stop();
	}
	this.frame_62 = function() {
		this.stop();
	}
	this.frame_71 = function() {
		this.stop();
	}
	this.frame_80 = function() {
		this.stop();
	}
	this.frame_89 = function() {
		this.stop();
	}
	this.frame_98 = function() {
		this.stop();
	}
	this.frame_107 = function() {
		this.stop();
	}
	this.frame_116 = function() {
		this.stop();
	}
	this.frame_125 = function() {
		this.stop();
	}
	this.frame_134 = function() {
		this.stop();
	}
	this.frame_143 = function() {
		this.stop();
	}
	this.frame_152 = function() {
		this.stop();
	}
	this.frame_161 = function() {
		this.stop();
	}
	this.frame_170 = function() {
		this.stop();
	}
	this.frame_179 = function() {
		this.stop();
	}
	this.frame_188 = function() {
		this.stop();
	}
	this.frame_197 = function() {
		this.stop();
	}
	this.frame_206 = function() {
		this.stop();
	}
	this.frame_215 = function() {
		this.stop();
	}
	this.frame_224 = function() {
		this.stop();
	}
	this.frame_233 = function() {
		this.stop();
	}
	this.frame_242 = function() {
		this.stop();
	}
	this.frame_251 = function() {
		this.stop();
	}
	this.frame_260 = function() {
		this.stop();
	}
	this.frame_269 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(9).call(this.frame_17).wait(9).call(this.frame_26).wait(9).call(this.frame_35).wait(9).call(this.frame_44).wait(9).call(this.frame_53).wait(9).call(this.frame_62).wait(9).call(this.frame_71).wait(9).call(this.frame_80).wait(9).call(this.frame_89).wait(9).call(this.frame_98).wait(9).call(this.frame_107).wait(9).call(this.frame_116).wait(9).call(this.frame_125).wait(9).call(this.frame_134).wait(9).call(this.frame_143).wait(9).call(this.frame_152).wait(9).call(this.frame_161).wait(9).call(this.frame_170).wait(9).call(this.frame_179).wait(9).call(this.frame_188).wait(9).call(this.frame_197).wait(9).call(this.frame_206).wait(9).call(this.frame_215).wait(9).call(this.frame_224).wait(9).call(this.frame_233).wait(9).call(this.frame_242).wait(9).call(this.frame_251).wait(9).call(this.frame_260).wait(9).call(this.frame_269).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6F6F6").s().p("A0APXIGNlEQBLDZCjC2IlWFxQi6jNhrjvgA2EH8QgNhvAAhxQAAgwADgvIYs5IQA/gHA/ABQCBgBB3ARQAgACAfAHIlmGJQgdADgaABQlYAckSDJQhPA5hMBLQiUCVhYCtQhxDjgNEOIAAACIm/GRIgMhIgAQ7rQQjJiqjzhFIFclBQDYBhDACmIAVAVQAIAIACAGIgWAUIgSARQgEAEgBgBQAAgCAAACIkWDtQgKgJgKgGg");
	this.shape.setTransform(-26.95,-39.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AtxNyIgsgzQgHgDgDgGQiji2hLjaQgKgWgGgZQg2itAAjKIAAg4IAAgDQANkOBxjjQBYitCUiVQBMhLBPg5QESjJFZgdQAaAAAdgDIA0AAQCqAACeApIAVAHQDzBFDJCqQAKAGAKAJQAiAdAgAiQFtFrAAIDQAAIFltFtQluFqoBAAQoEAAltlqg");
	this.shape_1.setTransform(2.05,-15.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E6E5E5").s().p("ApDZMQldh7kakaQgfgggfgjIFWlwQADAGAHADIAsAyQFtFrIEAAQIBAAFtlrQFultAAoDQAAoFlulqQgfgjgigcIEWjuQgBgCABACQAAABAFgDIASgRIAWgUQAFADAQASIAuAvQAfAhAXAdQA4BFAdAdQAaAdAJAEQAHAFgEgCQgGgBAnAtQEjGjgBIbQAALDn1H2QkZEalcB7QkOBfk1AAQk1AAkNhfgA43KAQhCiogcizIG+mPIAAA5QAADIA2CuQAHAZAJAWImNFEIgZg4gA6liiQAypgG5m5QD7j8Exh9QDOhUDmgbIBcgHI4uZKIAHhCgAFMzkQiegpipAAIg0AAIFlmKQCyAfClBEIADACIAtATIlbFBIgWgGg");
	this.shape_2.setTransform(1.6,-10.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AmJTYQnmoggBrEQAArFHloRQHjoSLtBEQtiDxlJJaQmLLREpMjQEqMjQPD+QhdAIhZAAQqZAAmrngg");
	this.shape_3.setTransform(-81.55,-14.2833);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgdAAQB4AAh4AAg");
	this.shape_4.setTransform(25.6084,-186.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E6E5E5").s().p("AoGZMQk3h7j8kaQgcgggcgjIEylwQADAGAFADIAoAyQFGFrHNAAQHKAAFHlrQFGltAAoDQAAoFlGlqQgcgjgfgcID5juQAAgCAAACQABABAEgDIAQgRIAOgQIAAgCQAJAGALASQAdArA6BCIBSBdQAYAdAHAEQACABABABQABABABAAQAAABAAAAQgBAAgBgBQgFgBAjAtQEEGjAAIbQAALDnAH2Qj8Eak3B7QjxBfkTAAQkVAAjxhfgA2OKAQg7iogZizIGPmPIAAA5QAADIAxCuQAFAZAIAWIliFEIgXg4gA3wiiQAtpgGKm5QDgj8ERh9QC4hUDNgbIBSgHI2FZKIAGhCgAEpzkQiNgpiYAAIguAAIE+mKQCfAfCUBEIAEACIAnATIk2FBIgTgGg");
	this.shape_5.setTransform(15.8872,-14.85,1.0239,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F6F6F6").s().p("Ax1PXIFilEQBDDZCSC2IkyFxQimjNhfjvgAzrH8QgMhvAAhxQAAgwADgvIWD5IQA4gHA5ABQBzgBBrARQAdACAbAHIlAGJQgaADgXABQk0Acj0DJQhHA5hDBLQiFCVhPCtQhlDjgLEOIAAACImQGRIgKhIgAPKrQQi0iqjYhFIE2lBQDBBhCsCmIAOAXQAFAIABAFIACACIABAAIgBACIgOAPIgQARQgEAEAAgBQgBgCAAACIj4DtQgJgJgJgGg");
	this.shape_6.setTransform(-10.4688,-43.5,1.0239,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E6E5E5").s().p("AoSZLQk/h7kCkaQgdgggcgjIE5lwQADAGAGADIApAzQFNFqHYAAQHVAAFPlqQFOltAAoEQAAoElOlrQgcgigggdID+jtQAAgCABABQAAABAEgDIARgRIAOgQIABgBQAIAGAMARQAdArA8BCIBUBeQAZAcAHAEQACABABABQABABAAAAQABABgBAAQAAAAgBAAQgFgCAjAtQEKGjAAIbQAALEnKH1QkCEak+B7Qj3BfkaAAQkcAAj2hfgA2wJ/Qg9ingZi0IGZmPIAAA5QAADJAyCtQAFAZAIAWIlqFEIgYg4gA4UijQAupgGTm5QDmj7EXh9QC8hVDTgbIBSgFI2lZIIAGhCgAEwzlQiQgpicAAIgvAAIFGmKQCjAgCXBEIAEABIAoATIk9FCIgUgHg");
	this.shape_7.setTransform(12.2327,-14.775,0.7868,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6F6F6").s().p("AyRPXIFrlEQBFDZCWC2Ik6FxQiqjNhijvgA0JH8QgMhvAAhxQAAgwACgvIWk5HQBIgHAtAAQB2gBBuARQAdACAbAHIlHGJQgaADgYABQk7Acj7DJQhIA5hFBLQiHCVhRCtQhoDjgMEOIAAACImZGRIgKhIgAPhrQQi4iqjehFIE+lBQDGBhCwCmIAOAXQAFAIABAFIADACIAAAAIAAACIgPAPIgQARQgEAEgBgBQAAgCAAACIj/DtQgJgJgJgGg");
	this.shape_8.setTransform(-8.4939,-43.5,0.7868,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AESaaQjLgQi4h1Qi5h2jxmTQjxmTAkq3QAkq5Ewm/QEwm/C+gcQC+gbC/AGQDlAGAygBQlNAjkXEXQkHEIhZFXQhvGvgNDwQgPEYBWGhQBaG1DXEGQDxElGxB5QkQgDimgMg");
	this.shape_9.setTransform(-71.9094,-15.7037);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AA9aXQiQgNhxiFQhxiFh0j7Qh1j8gzkUQg0kUgHlZQgHlYAykPQAykQBpjyQBojyB9h+QB9h/BWguQBUgvD2AGQEgAHAvgCQk2Bti9ElQiTDlhiGIQhVFTAREBQAHBfAbC5QAkD/APB9QAXC+A0CKQAvCBBaB4QBIBhCOCRIEvEwQm/gEiRgNg");
	this.shape_10.setTransform(-54.143,-18.3343);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AlAaSQggAAAAgfMAAAgzlQAAgfAgAAIKBAAQAgAAAAAfMAAAAzlQAAAfggAAg");
	this.shape_11.setTransform(-6.0062,-14.7,0.728,1);
	this.shape_11._off = true;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AldV4QCOiRBIhhQBah4AviBQA0iKAXi+QAPh9Akj/QAbi5AHhfQARkBhVlTQhimIiTjlQi9klk2htQAvACEggHQD2gGBUAvQBWAuB9B/QB9B+BoDyQBpDyAyEQQAyEPgHFYQgHFZg0EUQgzEUh1D8Qh0D7hxCFQhxCFiQANQiRANm/AEIEvkwg");
	this.shape_12.setTransform(41.093,-7.8343);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AglULQDXkGBam1QBWmhgPkYQgNjwhvmvQhZlXkHkIQkXkXlNgjQAyABDlgGQC/gGC+AbQC+AcEwG/QEwG/AkK5QAkK3jxGTQjxGTi5B2Qi4B1jLAQQimAMkQADQGxh5Dxklg");
	this.shape_13.setTransform(64.6094,-10.4537);

	this.instance = new lib.vee();
	this.instance.setTransform(109.05,16.25);

	this.instance_1 = new lib.vee();
	this.instance_1.setTransform(114.15,-23.85,1,1,0,0,0,5.1,0);

	this.text = new cjs.Text(",כבו תאורה מיותרת כל עוד יש אור שמש, פתחו את התריסים !הסיטו- את הווילונות ותנו לקרני השמש להאיר לכם את החדר\n\nהקפידו לכבות מכשירי חשמל שלא בשימוש  מזגן כשאין איש .בחדר, ניתוק המטען של הסלולרי מהחשמל\n", "bold 12px 'Calibri'");
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.lineWidth = 280;
	this.text.parent = this;
	this.text.setTransform(-7.001,-25.55,0.7732,0.7732);

	this.text_1 = new cjs.Text("במיוחד המכשירים המחוברים", "16px 'Calibri'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 188;
	this.text_1.parent = this;
	this.text_1.setTransform(-4.0927,-48.6,0.7732,0.7732);

	this.text_2 = new cjs.Text(",\"נמצאים במצב \"חצי כבוי ", "bold 10px 'Calibri'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 14;
	this.text_2.lineWidth = 101;
	this.text_2.parent = this;
	this.text_2.setTransform(-27.8469,-66.5275,1.2447,1.2447);

	this.text_3 = new cjs.Text(",גם כשנדמה לנו שהמכשירים שלנו כבויים לפעמים הם רק ", "16px 'Calibri'");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 22;
	this.text_3.lineWidth = 263;
	this.text_3.parent = this;
	this.text_3.setTransform(103.226,-83.45,0.7732,0.7732);

	this.text_4 = new cjs.Text("!אם לא משתמשים – מכבים", "bold 11px 'Calibri'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 15;
	this.text_4.lineWidth = 126;
	this.text_4.parent = this;
	this.text_4.setTransform(1.2103,-116.05,1.2447,1.2447);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F6F6F6").s().p("A0EPXIGMlEQBMDZCjC2IlWFwQi7jMhqjvgA2IH7QgNhuAAhyQAAguADgwIYs5IQA+gHBAAAQCBABB3APQAgAEAfAFIlmGKQgdADgaAAQlZAdkRDKQhQA4hLBLQiUCVhYCtQhxDjgNENIAAAEIm/GPIgMhIgAQ3rQQjJipjzhGIFblCQDZBjDACmIAFADIgBACIAjAWQgtADgFAVIgEAXIkVDtQgKgIgKgHg");
	this.shape_14.setTransform(-27.975,-42.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E6E5E5").s().p("AzRS2QgfgfgfgjIFWlwQADAGAHADIAsAyQFtFrIFAAQIAAAFtlrQFultAAoDQAAoElulrQgfgjgigcIEWjuIADgWQAFgWAtgDQCCCJBOCUIgCgGQGzHognJRQgqJtn1H1Qn1H1rDAAQrFAAn1n1gA5OJ/QhCingcizIG/mPIAAA5QAADJA2CtQAGAZAJAWImMFEIgag5gA68iiQAypgG5m5QGmmlI6hDIBcgHI4tZJIAGhBgAE1zkQidgqipAAIg1AAIFlmJQC0AgCnBFIAsATIlbFCIgWgHg");
	this.shape_15.setTransform(2.4039,-13.45);

	this.instance_2 = new lib.vee();
	this.instance_2.setTransform(105.35,-21.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F6F6F6").s().p("AzoPXIGNlEQBLDZCkC3IlXFwQi6jNhrjvgA1sH8QgNhvAAhxQAAgwADgvIYs5IQA/gHA/ABQCBgBB4ARQAgACAeAHIlmGJQgdADgZABQlZAckSDJQhPA5hLBLQiUCVhZCtQhxDjgNENIAAADIm/GRIgMhIgARUrQQjKiqjyhFIFblCQAoASAnAVQCjBVCVB9IAAABQgPAUgKAWIgBACQgKAVgFAZIgDAWIgCATIjlDDQgKgJgJgGg");
	this.shape_16.setTransform(-30.825,-42.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E6E5E5").s().p("Ay6S3QgfgggfgjIFWlwQADAGAHADIAsAyQFtFrIEAAQIBAAFtlrQFultAAoDQAAoFlulqQgfgjgigcIDkjDIACgTIADgXQAFgYALgWIABgBQAJgXAPgUIFFFpIABgBIACAAIAKAQIACACQEVGcAAIOQgBLDn1H2Qn0H0rEAAQrEAAn1n0gA43KAQhCiogcizIG+mPIAAA5QAADIA2CuQAHAZAJAWImNFEIgZg4gA6liiQAypgG5m5QDGjGDmh3QEGiHEugkIBbgHI4tZKIAHhCgAFMzkQiegpipAAIg0AAIFlmKQC0AgCmBFIAtATIlbFBIgWgGg");
	this.shape_17.setTransform(0.15,-13.75);

	this.text_5 = new cjs.Text("להתאים את עוצמת האור", "bold 12px 'Calibri'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 17;
	this.text_5.lineWidth = 140;
	this.text_5.parent = this;
	this.text_5.setTransform(-3.5235,-96.6275,1.2447,1.2447);

	this.text_6 = new cjs.Text("עמעם יאפשר לכם ", "18px 'Calibri'");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 24;
	this.text_6.lineWidth = 213;
	this.text_6.parent = this;
	this.text_6.setTransform(-4.0288,-117.4,0.7732,0.7732);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F6F6F6").s().p("Az0PXIGNlEQBLDZCkC3IlXFwQi6jNhrjvgA14H8QgNhvAAhxQAAgwADgvIYs5IQA/gHA/ABQCBgBB4ARQAgACAeAHIlmGJQgdADgZABQlZAckSDJQhPA5hLBLQiUCVhZCtQhxDjgNENIAAADIm/GRIgMhIgARIrQQjKiqjyhFIFblCQAoASAnAVQCtBaCdCHIAGAFIgBACIgBACQgJATgFAUQgGAPgEAQIkRDpQgKgJgJgGg");
	this.shape_18.setTransform(-29.6375,-42.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E6E5E5").s().p("Ay6S3QgfgggfgjIFWlwQADAGAHADIAsAyQFtFrIEAAQIBAAFtlrQFultAAoDQAAoFlulqQgfgjgigcIEQjpQAEgQAGgQQAFgUAJgSIABgCIABgCIE+FpQETGbAAIMQgBLDn1H2Qn0H0rEAAQrEAAn1n0gA43KAQhCiogcizIG+mPIAAA5QAADIA2CuQAHAZAJAWImNFEIgZg4gA6liiQAypgG5m5QDGjGDmh3QEGiHEugkIBbgHI4tZKIAHhCgAFMzkQiegpipAAIg0AAIFlmKQC0AgCmBFIAtATIlbFBIgWgGg");
	this.shape_19.setTransform(0.15,-13.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgagbIACgDQAaAdAZAdIgCADg");
	this.shape_20.setTransform(128.425,-123.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("AtxNyIgsgzQgGgDgEgGQiji2hLjaQgKgWgGgZQg2itAAjKIAAg4IAAgDQANkOBxjjQBYitCUiVQBLhLBQg5QERjJFagdQAaAAAdgDIA0AAQCqAACeApIAVAHQDzBFDKCqQAJAGAKAJQAjAdAfAiQFtFrAAIDQAAIFltFtQluFqoBAAQoEAAltlqg");
	this.shape_21.setTransform(-0.1,-18.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E6E5E5").s().p("Ay6S2QgggfgegjIFWlwQADAGAGADIAtAzQFtFqIEAAQIBAAFtlqQFtluAAoDQAAoFltlqQgfgigjgdIEbjyIAAgBQADgOAFgOQAEgRAHgQICQCkIAzA6IBxCAIAAAAIABgBIAHALIACADQEQGZgBIJQABLEn1H0Qn1H1rEAAQrEAAn1n1gA43J/QgmhfgahjQgShLgNhNIHAmPIAAA5QAADIA2CuQAFAZAKAWImNFEIgZg5gA6lijQAMiSAiiHQBumwFPlPQDGjGDmh4QEGiGEugkIBbgHI4sZJIAGhCgAFMzkQiegqipAAIg1AAIFmmJQCzAgCnBFIAtATIlbFCIgWgHg");
	this.shape_22.setTransform(-0.55,-13.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F6F6F6").s().p("Az1PWIGMlEQBMDaCjC3IlWFvQi7jMhqjwgA15H7QgNhuAAhyQAAguADgwIYs5JQA+gFBAgBQCBAAB3AQQAgADAfAGIlmGKQgdAEgagBQlZAdkRDKQhQA4hLBMQiUCUhYCtQhxDjgNEOIAAADIm/GPIgMhIgARGrQQjJipjzhGIFblBQAoASAnAUQCtBaCdCIIAJAHIAAABQgHAQgEARQgFANgDAPIAAABIkaDyQgKgJgKgHg");
	this.shape_23.setTransform(-30.175,-41.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CCCCCC").s().p("AtxNyIgsgzQgGgCgDgGIgBgBIgNgPIipj7QgghBgYhEIAAgBQgKgWgGgZQg2itAAjKIAAg2IAAgCIAAgDQANkOBxjjQBYitCUiVQBMhLBPg5QESjJFZgdQAaAAAdgDIABAAIAzAAQCqAACeApIAVAHIACAAQDyBGDICpQAKAGAKAJIABABQAiAcAfAiIATAUQCQCaBNCaQBwEJAND5IAAAkQAAIFltFtQluFqoBAAQoEAAltlqg");
	this.shape_24.setTransform(0.6,-18.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E6E5E5").s().p("AzMS3QgggfgfgkIAAAAIAAgBIFWlwIABABQADAGAGACIAsAzQFtFqIFAAQIAAAFtlqQFultAAoEIgBglQgMj5hwkJQhOiaiQiaIgTgUQgfgigigcIAAgBIEVjtIAEgXIAAgBQAEgRAggFIAOgBQAsA0AoA6IC5DNQCKDHBJDiQCHEygUFZQgeHylqGyIhfBtQgYAagZAZQn0H0rEAAQrEAAn1n0gA5JKAIgBgBQhCingci0IAAAAIG/mOIAAABIAAA3QAADJA2CuQAGAZAJAWImMFEIgZg4gA64ijQAypfG5m5QGmmmI6hCIBcgHI4tZJIAGhCgAE5zlQidgpipAAIg0AAIgBAAIFlmKQC0AgCnBFIAsATIlbFCIgWgHg");
	this.shape_25.setTransform(2.0482,-13.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F6F6F6").s().p("AvrWFIkZmuIAAgBIGMlEIABABQAXBEAhBAICoD7IAOAQIlWFwIAAABIAAAAIgMgOgA2IH7QgNhuAAhyQAAgvADgwIYs5IQA+gGBAAAQCBAAB3AQQAgADAfAGIlmGJQgdAEgaAAQlZAckRDKQhQA5hLBLQiUCUhYCuQhxDigNEOIAAADIm/GQIAAAAIgMhIgAQ3rRQjJipjxhFIgCAAIFblCQDZBiDACmIAFAEIAAABIgBAAIAjAWIgOABQggAGgEARIAAABIgEAWIkVDuQgKgJgKgHg");
	this.shape_26.setTransform(-27.975,-42.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CCCCCC").s().p("AtwNyIgtgzQgGgDgDgGQiki2hMjaQgJgWgGgZQg2itAAjKIAAg4IAAgDQANkOBxjjQBZitCUiVQBLhLBPg5QESjJFagdQAZAAAdgDIA0AAQCqAACdApIAXAHQDyBFDKCqQAJAGAKAJQAiAdAfAiQFuFrAAIDQAAIFluFtQltFqoBAAQoDAAltlqg");
	this.shape_27.setTransform(0.65,-18.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F6F6F6").s().p("AzzPXIGNlEQBLDZCkC2IlXFwQi6jMhrjvgA13H7QgNhuAAhyQAAguADgwIYs5JQA/gFA/gBQCBAAB4AQQAgAEAeAFIlmGKQgdAEgZgBQlZAdkSDKQhPA4hLBLQiUCVhZCtQhxDjgNENIAAAEIm/GPIgMhIgARJrQQjKipjyhGIFblCQAoATAnAUQCtBaCdCIIAEADIgBABQgKAWgFAYIgEAXIAAABIkVDtQgKgIgJgHg");
	this.shape_28.setTransform(-29.675,-42);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E6E5E5").s().p("Ay6S2QgfgfgggjIFXlwQADAGAGADIAtAzQFtFqIDAAQIBAAFulqQFtluAAoDQAAoEltlrQgfgigigdIEUjtIABgCIAEgWQAFgZAJgVIABgBIEuFSIABgBIAGAJIABABQEdGgAAIWQAALEn1H0Qn1H1rDAAQrFAAn1n1gA43J/QgmhfgZhjQgUhLgMhNIG/mPIAAA5QAADIA2CuQAHAZAJAWImMFEIgag5gA6lijQAMiSAjiHQBtmwFPlPQDGjGDnh4QEEiHEvgjIBcgHI4tZJIAGhCgAFMzkQiegqiqAAIg0AAIFlmJQC0AgCoBFIAsATIlbFCIgWgHg");
	this.shape_29.setTransform(0.2,-13.35);

	this.text_7 = new cjs.Text("!התקינו חסכם", "bold 14px 'Calibri'");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 19;
	this.text_7.lineWidth = 143;
	this.text_7.parent = this;
	this.text_7.setTransform(0.07,-112.7775,1.2447,1.2447);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E6E5E5").s().p("Ay6S2QgfgfgggjIFXlwQADAGAGADIAtAzQFtFqIDAAQIBAAFulqQFtluAAoDQAAoEltlrQgfgigigdIEUjtIABgCIAEgWQAFgZAJgVIEuFRIACgBIAIAMQEcGfAAIVQAALEn1H0Qn1H1rDAAQrFAAn1n1gA43J/QgmhfgZhjQgUhLgMhNIG/mPIAAA5QAADIA2CuQAHAZAJAWImMFEIgag5gA6lijQAMiSAjiHQBtmwFPlPQDGjGDnh4QEEiHEvgjIBcgHI4tZJIAGhCgAFMzkQiegqiqAAIg0AAIFlmJQC0AgCoBFIAsATIlbFCIgWgHg");
	this.shape_30.setTransform(0.2,-13.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E6E5E5").s().p("Ay6S2QgfgfgggjIFXlwQADAGAGADIAtAzQFtFqIDAAQIBAAFulqQFtluAAoDQAAoEltlrQgfgigigdIEUjtIABgCIAEgWQAFgZAJgVIABgBIEtFSIACgBIALARQEZGdAAISQAALEn1H0Qn1H1rDAAQrFAAn1n1gA43J/QgmhfgZhjQgUhLgMhNIG/mPIAAA5QAADIA2CuQAHAZAJAWImMFEIgag5gA6lijQAMiSAjiHQBtmwFPlPQDGjGDnh4QEEiHEvgjIBcgHI4tZJIAGhCgAFMzkQiegqiqAAIg0AAIFlmJQC0AgCoBFIAsATIlbFCIgWgHg");
	this.shape_31.setTransform(0.2,-13.35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F6F6F6").s().p("AzzPXIGNlEQBLDZCkC2IlXFwQi6jMhrjvgA13H7QgNhuAAhyQAAguADgwIYs5JQA/gFA/gBQCBAAB4AQQAgAEAeAFIlmGKQgdAEgZgBQlZAdkSDKQhPA4hLBLQiUCVhZCtQhxDjgNENIAAAEIm/GPIgMhIgARJrQQjKipjyhGIFblCQAoATAnAUQCtBaCdCIIAEADIgBABIAAAAQgKAWgFAYIgEAXIAAABIkVDtQgKgIgJgHg");
	this.shape_32.setTransform(-29.675,-42);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E6E5E5").s().p("Ay6S2QgfgfgggjIFXlwQADAGAGADIAtAzQFtFqIDAAQIBAAFulqQFtluAAoDQAAoEltlrQgfgigigdIEUjtIABgCIAEgWQAFgZAJgVIABgBIEsFSIADgBIANAUQEXGcAAIQQAALEn1H0Qn1H1rDAAQrFAAn1n1gA43J/QgmhfgZhjQgUhLgMhNIG/mPIAAA5QAADIA2CuQAHAZAJAWImMFEIgag5gA6lijQAMiSAjiHQBtmwFPlPQDGjGDnh4QEEiHEvgjIBcgHI4tZJIAGhCgAFMzkQiegqiqAAIg0AAIFlmJQC0AgCoBFIAsATIlbFCIgWgHg");
	this.shape_33.setTransform(0.2,-13.35);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F6F6F6").s().p("AzzPXIGNlEQBLDZCkC2IlXFwQi6jMhrjvgA13H7QgNhuAAhyQAAguADgwIYs5JQA/gFA/gBQCBAAB4AQQAgAEAeAFIlmGKQgdAEgZgBQlZAdkSDKQhPA4hLBLQiUCVhZCtQhxDjgNENIAAAEIm/GPIgMhIgARJrQQjKipjyhGIFblCQAoATAnAUQCtBaCdCIIADACIABABIAAAAIgBABQgKAWgFAYIgEAXIAAABIkVDtQgKgIgJgHg");
	this.shape_34.setTransform(-29.675,-42);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E6E5E5").s().p("Ay6S2QgfgfgggjIFXlwQADAGAGADIAtAzQFtFqIDAAQIBAAFulqQFtluAAoDQAAoEltlrQgfgigigdIEUjtIABgCIAEgWQAFgZAJgVIABgBIEtFSIACgBIALAQIACADQEXGdAAIQQAALEn1H0Qn1H1rDAAQrFAAn1n1gA43J/QgmhfgZhjQgUhLgMhNIG/mPIAAA5QAADIA2CuQAHAZAJAWImMFEIgag5gA6lijQAMiSAjiHQBtmwFPlPQDGjGDnh4QEEiHEvgjIBcgHI4tZJIAGhCgAFMzkQiegqiqAAIg0AAIFlmJQC0AgCoBFIAsATIlbFCIgWgHg");
	this.shape_35.setTransform(0.2,-13.35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E6E5E5").s().p("Ay6S2QgfgfgggjIFXlwQADAGAGADIAtAzQFtFqIDAAQIBAAFulqQFtluAAoDQAAoEltlrQgfgigigdIEUjtIABgCIAEgWQAFgZAJgVIABgBIEvFRQEkGkAAIcQAALEn1H0Qn1H1rDAAQrFAAn1n1gA43J/QgmhfgZhjQgUhLgMhNIG/mPIAAA5QAADIA2CuQAHAZAJAWImMFEIgag5gA6lijQAMiSAjiHQBtmwFPlPQDGjGDnh4QEEiHEvgjIBcgHI4tZJIAGhCgAFMzkQiegqiqAAIg0AAIFlmJQC0AgCoBFIAsATIlbFCIgWgHg");
	this.shape_36.setTransform(0.2,-13.35);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F6F6F6").s().p("AzzPXIGNlFQBLDaCkC2IlXFwQi6jMhrjvgA13H7QgNhuAAhyQAAguADgwIYs5JQA/gFA/gBQCBAAB4AQQAgAEAeAFIlmGKQgdAEgZgBQlZAdkSDKQhPA4hLBLQiUCVhZCtQhxDjgNENIAAAEIm/GPIgMhIgARJrQQjKipjyhGIFblCQAoATAnAUQCtBaCdCIIABAAIADADIAAAAIgBABQgKAWgFAYIgDAXIgBABIkVDtQgKgIgJgHg");
	this.shape_37.setTransform(-29.525,-41.55);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E6E5E5").s().p("Ay6S2QgggfgegjIFWlwQADAGAGADIAtAzQFtFqIEAAQIBAAFtlqQFtluAAoDQAAoEltlrQgfgigjgdIEVjtIABgCIADgWQAFgZAKgVIABgBIEwFRQEiGkAAIcQABLEn1H0Qn1H1rEAAQrEAAn1n1gA43J/QgmhfgahjQgShLgNhNIHAmPIAAA5QAADIA2CuQAFAZAKAWImNFEIgZg5gA6lijQAMiSAiiHQBumwFPlPQDGjGDmh4QEGiHEugjIBbgHI4sZJIAGhCgAFMzkQiegqipAAIg1AAIFmmJQCzAgCnBFIAtATIlbFCIgWgHg");
	this.shape_38.setTransform(0.35,-12.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E6E5E5").s().p("AiXanQrCg+nHoeQgdgigcgmIF1lRQADAHAGADIAoA3QFMGIIDAtQH+AtGLlJQGMlNAtoCQAtoClNmIQgbgmgggfIDfifIAAAAIBvhXIC1DLIABAAIABACIABACQFRHpg2JkQg9LCofHHQndGRpdAAQhRAAhUgHgA5rH1QgzisgNi1IHglnIgFA5QgRDIAnCxQAEAZAHAXImnEhIgVg7gA6Sk0QBmpYHemRQHImAI/gQIBaABI6yW6IANhCgAG1zAQiZg3ipgPIg1gEIGHlpQCwAvChBTIArAXIl2EiQgKgEgMgEg");
	this.shape_39.setTransform(0.3656,-13.7339);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CCCCCC").s().p("AhrTYQoCgtlMmJIgog2QgHgEgCgGQiTjEg4jfQgIgXgEgZQgniyASjIIAFg4IAAgDQAlkNCEjYQBnilChiHQBRhEBUgyQEiixFaACQAaACAcgBIA1AFQCqAPCZA3QAMADAJAFQDsBaC6C7IASARQAgAfAcAlQFNGJgtIBQgtIDmMFMQldEim2AAQg6AAg9gFg");
	this.shape_40.setTransform(1.0468,-18.4855);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F6F6F6").s().p("A1mOFIGokhQA4DgCTDDIl1FRQiojbhWj4gA3AGgQgDhvAKhxQAEgvAHgvIay25QA+gBBAAGQCAALB2AaQAgAGAeAJImIFpQgcABgagDQlagBkiCxQhUAxhRBFQihCHhnClQiEDYglELIAAADIngFoIgGhJgARhpOQi6i6jshbIF2kiQCUBTCFB1IgBACIgBABIB5CHIhuBXIAAAAIjgCfIgSgRg");
	this.shape_41.setTransform(-23.6954,-47.8271);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E6E5E5").s().p("AiXanQrCg+nHoeQgdgigcgmIF1lRQADAHAGADIAoA3QFMGIIDAtQH+AtGLlJQGMlNAtoCQAtoClNmIQgbgmgggfIDfifIAAAAIBrhaIC5DOIABAAIACAEQFRHpg2JkQg9LCofHHQndGRpdAAQhRAAhUgHgA5rH1QgzisgNi1IHglnIgFA5QgRDIAnCxQAEAZAHAXImnEhIgVg7gA6Sk0QBmpYHemRQHImAI/gQIBaABI6yW6IANhCgAG1zAQiZg3ipgPIg1gEIGHlpQCwAvChBTIArAXIl2EiQgKgEgMgEg");
	this.shape_42.setTransform(0.3656,-13.7339);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F6F6F6").s().p("A1jOFIGnkhQA4DgCTDDIl1FRQiojbhVj4gA29GgQgEhvAKhxQAEgvAHgvIay25QA/gBA/AGQCBALB1AaQAgAGAeAJImHFpQgdABgZgDQlbgBkiCxQhUAxhRBFQigCHhoClQiEDYglELIAAADIngFoIgFhJgARjpOQi6i6jrhbIF2kiQCRBSCDBzIAEADIAAABIBzCGIhqBaIAAAAIjfCfIgTgRg");
	this.shape_43.setTransform(-23.9079,-47.8271);

	this.text_8 = new cjs.Text(" מומלץ לבדוק מראש טווחי מחירים עבור .החבילה הרצויה\n                    \nהחברה את ההצעה המשתלמת יותר שקיבלתם   בחברה אחרת – אתם !תופתעו .מהתוצאה", "bold 14px 'Calibri'");
	this.text_8.textAlign = "right";
	this.text_8.lineHeight = 19;
	this.text_8.lineWidth = 234;
	this.text_8.parent = this;
	this.text_8.setTransform(74.576,-8.1064,0.7732,0.7732,0.7666);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E6E5E5").s().p("AiXanQrCg+nHoeQgdgigcgmIF1lRQADAHAGADIAoA3QFMGIIDAtQH+AtGLlJQGMlNAtoCQAtoClNmIQgbgmgggfIDfifIBrhaIC5DOIABAAIACAEQFRHpg2JkQg9LCofHHQndGRpdAAQhRAAhUgHgA5rH1QgzisgNi1IHglnIgFA5QgRDIAnCxQAEAZAHAXImnEhIgVg7gA6Sk0QBmpYHemRQHImAI/gQIBaABI6yW6IANhCgAG1zAQiZg3ipgPIg1gEIGHlpQCwAvChBTIArAXIl2EiQgKgEgMgEg");
	this.shape_44.setTransform(0.3656,-13.7339);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F6F6F6").s().p("A1jOFIGnkhQA4DgCTDDIl1FRQiojbhVj4gA29GgQgEhvAKhxQAEgvAHgvIay25QA/gBA/AGQCBALB1AaQAgAGAeAJImHFpQgdABgZgDQlbgBkiCxQhUAxhRBFQigCHhoClQiEDYglELIAAADIngFoIgFhJgARjpOQi6i6jrhbIF2kiQCRBSCDBzIAEADIAAABIBzCGIhqBaIjfCfIgTgRg");
	this.shape_45.setTransform(-23.9079,-47.8271);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F6F6F6").s().p("A1kOFIGokhQA4DgCTDDIl1FRQiojbhWj4gA2+GgQgDhvAKhxQAEgvAHgvIay25QA+gBBAAGQCAALB2AaQAgAGAeAJImIFpQgcABgagDQlagBkiCxQhUAxhRBFQihCHhnClQiEDYglELIAAADIngFoIgGhJgARjpOQi6i6jshbIF2kiQCSBSCDBzIAEADIAAABIBzCGIhqBaIjgCfIgSgRg");
	this.shape_46.setTransform(-23.2954,-47.8271);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F6F6F6").s().p("Az0PWIGNlEQBLDaCkC3IlWFvQi7jMhrjwgA14H7QgNhuAAhyQAAguADgwIYs5JQA/gFBAgBQCBAAB3AQQAgADAfAGIlmGKQgdAEgagBQlZAdkRDKQhQA4hLBMQiUCUhZCtQhxDjgNEOIAAADIm+GPIgNhIgARIrQQjKipjyhGIFblBQAoASAnAUQCtBaCdCIIACABIADADIAAABIAAABIgBACQgKAVgFAZIgDAUIkWDuQgLgJgJgHg");
	this.shape_47.setTransform(-29.65,-42.35);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E6E5E5").s().p("Ay6S2QgfgfgfgjIFWlwQADAGAHADIAsAzQFtFqIEAAQIBAAFtlqQFuluAAoDQAAoFlulqQgfgigigdIEWjuIADgUQAFgYAKgWIABgCIAAgBIEtFVIACgBIACAAQEgGiABIaQgBLEn1H0Qn0H1rEAAQrEAAn1n1gA43J/QgmhfgahjQgShLgMhNIG+mPIAAA5QAADIA2CuQAHAZAJAWImNFEIgZg5gA6lijQAMiSAiiHQBumwFPlPQDGjGDmh4QEGiGEugkIBbgHI4tZJIAHhCgAFMzkQiegqipAAIg0AAIFlmJQC0AgCmBFIAtATIlbFCIgWgHg");
	this.shape_48.setTransform(0.15,-13.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CCCCCC").s().p("AtxNyIgsgzQgHgDgDgGQiji2hLjaQgKgWgGgZQg2itAAjKIAAg4IAAgDQANkOBxjjQAdg4Aig2QBJhvBkhlQBMhLBPg5QESjJFZgdQAaAAAdgDIA0AAQCqAACeApIAVAHQDzBFDJCqQAKAGAKAJQAiAdAgAiQBkBkBJBwQDAElAAF1QAAIFltFtQluFqoBAAQoEAAltlqg");
	this.shape_49.setTransform(0.6,-18.325);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E6E5E5").s().p("Ay6S3QgfgggfgjIFWlwQADAGAHADIAsAyQFtFrIEAAQIBAAFtlrQFultAAoDQgBl2i/klQhJhwhlhkQgfgjgigcIEVjtIAAgCIAEgXQAFgYAKgWIEsFSIACAAIABgBIADAEIABACQBQB0A5B8QBACKAkCVQAyDLABDgQgBDfgyDLQhsG4lXFXQn0H0rEAAQrEAAn1n0gA43KAQgPgogOgnQgsiDgViJIG+mPIAAA5QAADIA2CuQAHAZAJAWImNFEIgZg4gA6liiQARjSBAi+QAbhPAihLQB7kODijhQCjijC5huQEmiuFegpIBbgHI4tZKIAHhCgAFMzkQiegpipAAIg0AAIFlmKQC0AgCmBFIAtATIlbFBIgWgGg");
	this.shape_50.setTransform(0.15,-13.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F6F6F6").s().p("AzzPXIGNlEQBLDZCkC3IlXFwQi6jNhrjvgA13H8QgNhvAAhxQAAgwADgvIYs5IQA/gHA/ABQCBgBB4ARQAgACAeAHIlmGJQgdADgZABQlZAckSDJQhPA5hLBLQhkBlhJBwQgjA1gdA4QhxDjgNENIAAADIm/GRIgMhIgARJrQQjKiqjyhFIFblCQBRAlBOAuQCBBOB5BnIABACIADACIAAABQgKAVgFAZIgEAWIAAACIkWDtQgKgJgJgGg");
	this.shape_51.setTransform(-29.7125,-41.95);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E6E5E5").s().p("Ay6S3QgfgggfgjIFWlwQADAGAHADIAsAyQFtFrIEAAQIBAAFtlrQFultAAoDQgBl2i/klQhJhwhlhkQgfgigigdIEWjuIADgQQAFgYAKgWIEsFSIAEgBIAEgBQBPBzA5B8QBACKAkCVQAyDLABDgQgBDfgyDLQhsG4lXFXQn0H0rEAAQrEAAn1n0gA43KAQgPgngOgoQgsiDgViJIG+mPIAAA5QAADJA2CtQAHAZAJAWImNFEIgZg4gA6liiQARjSBAi+QAbhPAihLQB7kODijhQCjijC5huQEmiuFegpIBbgHI4tZJIAHhBgAFMzkQiegqipAAIg0AAIFlmJQC0AgCmBFIAtATIlbFBIgWgGg");
	this.shape_52.setTransform(0.15,-14.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F6F6F6").s().p("Az0PXIGMlEQBMDZCjC2IlWFxQi7jNhqjvgA14H8QgNhvAAhyQAAguADgwIYs5IQA+gHBAAAQCBABB3AQQAgACAfAHIlmGJQgdADgaABQlZAckRDJQhQA5hLBLQhkBlhJBwQgjA1gcA4QhxDjgNENIAAADIm/GRIgMhIgARHrQQjJiqjzhFIFblCQBRAlBOAuQCCBOB4BnIAHAGIgCAFIgBACQgKAVgFAZIgCAPIkXDuQgKgJgKgGg");
	this.shape_53.setTransform(-29.5875,-42.75);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F6F6F6").s().p("Az0PXIGMlEQBMDZCjC2IlWFxQi7jNhqjvgA14H8QgNhvAAhyQAAguADgwIYs5IQA+gHBAAAQCBABB3AQQAgACAfAHIlmGJQgdADgaABQlZAckRDJQhQA5hLBLQiUCVhYCtQhxDjgNENIAAADIm/GRIgMhIgARHrQQjJiqjzhFIFblCQDZBiDACmIAHAGIgCAFIgBACQgKAVgFAZIgCAPIkXDuQgKgJgKgGg");
	this.shape_54.setTransform(-29.5875,-42.75);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E6E5E5").s().p("Ay6S3QgfgggfgjIFWlwQADAGAHADIAsAyQFtFrIEAAQIBAAFtlrQFultAAoDQAAoElulrQgfgigigdIEWjuIADgQQAFgYAKgWIEsFSIAEgBIAEgBQEfGhAAIYQgBLDn1H2Qn0H0rEAAQrEAAn1n0gA43KAQhCingci0IG+mPIAAA5QAADJA2CtQAHAZAJAWImNFEIgZg4gA6liiQAypgG5m5QGlmmI7hCIBbgHI4tZJIAHhBgAFMzkQiegqipAAIg0AAIFlmJQC0AgCmBFIAtATIlbFBIgWgGg");
	this.shape_55.setTransform(0.15,-14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:2.05,y:-15.525,skewY:0}},{t:this.shape}]}).to({state:[{t:this.shape_6,p:{skewY:0,x:-10.4688,y:-43.5}},{t:this.shape_5,p:{skewY:0,x:15.8872,y:-14.85}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:19.0244,y:-19.8283,skewY:0}},{t:this.shape_4,p:{skewY:0,x:25.6084,y:-186.425}},{t:this.shape_3,p:{skewY:0,x:-81.55,y:-14.2833}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.7868,x:-8.4939,y:-43.5,skewY:0}},{t:this.shape_7,p:{scaleX:0.7868,x:12.2327,y:-14.775,skewY:0}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:15.3601,y:-19.8283,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:0.5806,x:4.7801,y:-46.15,skewY:0}},{t:this.shape_7,p:{scaleX:0.5806,x:20.0748,y:-17.425,skewY:0}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:23.2728,y:-22.4783,skewY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_8,p:{scaleX:0.5806,x:-17.8301,y:-35.65,skewY:180}},{t:this.shape_7,p:{scaleX:0.5806,x:-33.1248,y:-6.925,skewY:180}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:-36.3228,y:-11.9783,skewY:180}}]},1).to({state:[{t:this.shape_13},{t:this.shape_8,p:{scaleX:0.7868,x:1.1939,y:-38.25,skewY:180}},{t:this.shape_7,p:{scaleX:0.7868,x:-19.5327,y:-9.525,skewY:180}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:-22.6601,y:-14.5783,skewY:180}}]},1).to({state:[{t:this.shape_6,p:{skewY:180,x:13.8188,y:-40}},{t:this.shape_5,p:{skewY:180,x:-12.5372,y:-11.35}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:-15.6744,y:-16.3283,skewY:180}},{t:this.shape_4,p:{skewY:180,x:-22.2584,y:-182.925}},{t:this.shape_3,p:{skewY:180,x:84.9,y:-10.7833}}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:0.6,y:-18.475,skewY:0}},{t:this.text_4,p:{scaleX:1.2447,scaleY:1.2447,x:1.2103,y:-116.05,text:"!אם לא משתמשים – מכבים",font:"bold 11px 'Calibri'",lineHeight:15.4,lineWidth:126,textAlign:"center",rotation:0}},{t:this.text_3,p:{scaleX:0.7732,scaleY:0.7732,x:103.226,y:-83.45,text:",גם כשנדמה לנו שהמכשירים שלנו כבויים לפעמים הם רק ",font:"16px 'Calibri'",textAlign:"right",lineHeight:21.55,lineWidth:263,rotation:0}},{t:this.text_2,p:{scaleX:1.2447,scaleY:1.2447,x:-27.8469,y:-66.5275,text:",\"נמצאים במצב \"חצי כבוי ",font:"bold 10px 'Calibri'",textAlign:"center",lineHeight:14.2,lineWidth:101,rotation:0}},{t:this.text_1,p:{x:-4.0927,y:-48.6,text:"במיוחד המכשירים המחוברים",font:"16px 'Calibri'",textAlign:"center",lineHeight:21.55,lineWidth:188,scaleX:0.7732,scaleY:0.7732,rotation:0}},{t:this.text,p:{scaleX:0.7732,scaleY:0.7732,x:-7.001,y:-25.55,text:",כבו תאורה מיותרת כל עוד יש אור שמש, פתחו את התריסים !הסיטו- את הווילונות ותנו לקרני השמש להאיר לכם את החדר\n\nהקפידו לכבות מכשירי חשמל שלא בשימוש  מזגן כשאין איש .בחדר, ניתוק המטען של הסלולרי מהחשמל\n",font:"bold 12px 'Calibri'",lineHeight:16.65,lineWidth:280,textAlign:"center",rotation:0}},{t:this.instance_1,p:{regX:5.1,x:114.15,y:-23.85}},{t:this.instance,p:{x:109.05,y:16.25}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:2.05,y:-15.525,skewY:0}},{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{skewY:0,x:-10.4688,y:-43.5}},{t:this.shape_5,p:{skewY:0,x:15.8872,y:-14.85}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:19.0244,y:-19.8283,skewY:0}},{t:this.shape_4,p:{skewY:0,x:25.6084,y:-186.425}},{t:this.shape_3,p:{skewY:0,x:-81.55,y:-14.2833}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.7868,x:-8.4939,y:-43.5,skewY:0}},{t:this.shape_7,p:{scaleX:0.7868,x:12.2327,y:-14.775,skewY:0}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:15.3601,y:-19.8283,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:0.5806,x:4.7801,y:-46.15,skewY:0}},{t:this.shape_7,p:{scaleX:0.5806,x:20.0748,y:-17.425,skewY:0}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:23.2728,y:-22.4783,skewY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_8,p:{scaleX:0.5806,x:-17.8301,y:-35.65,skewY:180}},{t:this.shape_7,p:{scaleX:0.5806,x:-33.1248,y:-6.925,skewY:180}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:-36.3228,y:-11.9783,skewY:180}}]},1).to({state:[{t:this.shape_13},{t:this.shape_8,p:{scaleX:0.7868,x:1.1939,y:-38.25,skewY:180}},{t:this.shape_7,p:{scaleX:0.7868,x:-19.5327,y:-9.525,skewY:180}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:-22.6601,y:-14.5783,skewY:180}}]},1).to({state:[{t:this.shape_6,p:{skewY:180,x:13.8188,y:-40}},{t:this.shape_5,p:{skewY:180,x:-12.5372,y:-11.35}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:-15.6744,y:-16.3283,skewY:180}},{t:this.shape_4,p:{skewY:180,x:-22.2584,y:-182.925}},{t:this.shape_3,p:{skewY:180,x:84.9,y:-10.7833}}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:0.6,y:-18.775,skewY:0}},{t:this.text_4,p:{scaleX:0.7732,scaleY:0.7732,x:-1.0288,y:-115.5,text:"הנורות המסורתיות מייצרות חום \nוצורכת הרבה חשמל  ",font:"16px 'Calibri'",lineHeight:21.55,lineWidth:213,textAlign:"center",rotation:0}},{t:this.text_3,p:{scaleX:1.2447,scaleY:1.2447,x:-14.0969,y:-51.5775,text:"!פחות חשמל",font:"bold 10px 'Calibri'",textAlign:"center",lineHeight:14.2,lineWidth:123,rotation:0}},{t:this.text_2,p:{scaleX:0.7732,scaleY:0.7732,x:92.9455,y:-75.5,text:"התקינו נורה חסכונית אשר צורכת ",font:"18px 'Calibri'",textAlign:"right",lineHeight:24,lineWidth:258,rotation:0}},{t:this.text_1,p:{x:95.999,y:-25.85,text:".\"היפטרו מנורות הליבון \"הרגילות\n \n.השתמשו בתאורת לד  או בנורות פלואורסנט קטנות\n\n,שימו לב! אם הנורות נשרפות לעיתים קרובות ייתכן\n.שיש בעיה בבית הנורה ",font:"bold 14px 'Calibri'",textAlign:"right",lineHeight:19.1,lineWidth:287,scaleX:0.7732,scaleY:0.7732,rotation:0}},{t:this.text,p:{scaleX:1.2447,scaleY:1.2447,x:31.5057,y:-51.5775,text:"80%",font:"bold 10px 'Calibri'",lineHeight:14.2,lineWidth:26,textAlign:"center",rotation:0}},{t:this.instance_2,p:{x:105.35,y:-21.45}},{t:this.instance_1,p:{regX:0,x:105.35,y:40.85}},{t:this.instance,p:{x:105.35,y:9.1}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:2.05,y:-15.525,skewY:0}},{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{skewY:0,x:-10.4688,y:-43.5}},{t:this.shape_5,p:{skewY:0,x:15.8872,y:-14.85}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:19.0244,y:-19.8283,skewY:0}},{t:this.shape_4,p:{skewY:0,x:25.6084,y:-186.425}},{t:this.shape_3,p:{skewY:0,x:-81.55,y:-14.2833}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.7868,x:-8.4939,y:-43.5,skewY:0}},{t:this.shape_7,p:{scaleX:0.7868,x:12.2327,y:-14.775,skewY:0}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:15.3601,y:-19.8283,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:0.5806,x:4.7801,y:-46.15,skewY:0}},{t:this.shape_7,p:{scaleX:0.5806,x:20.0748,y:-17.425,skewY:0}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:23.2728,y:-22.4783,skewY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_8,p:{scaleX:0.5806,x:-17.8301,y:-35.65,skewY:180}},{t:this.shape_7,p:{scaleX:0.5806,x:-33.1248,y:-6.925,skewY:180}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:-36.3228,y:-11.9783,skewY:180}}]},1).to({state:[{t:this.shape_13},{t:this.shape_8,p:{scaleX:0.7868,x:1.1939,y:-38.25,skewY:180}},{t:this.shape_7,p:{scaleX:0.7868,x:-19.5327,y:-9.525,skewY:180}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:-22.6601,y:-14.5783,skewY:180}}]},1).to({state:[{t:this.shape_6,p:{skewY:180,x:13.8188,y:-40}},{t:this.shape_5,p:{skewY:180,x:-12.5372,y:-11.35}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:-15.6744,y:-16.3283,skewY:180}},{t:this.shape_4,p:{skewY:180,x:-22.2584,y:-182.925}},{t:this.shape_3,p:{skewY:180,x:84.9,y:-10.7833}}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:0.6,y:-18.775,skewY:0}},{t:this.text_6,p:{scaleX:0.7732,scaleY:0.7732,x:-4.0288,y:-117.4,text:"עמעם יאפשר לכם ",font:"18px 'Calibri'",lineHeight:24,lineWidth:213,textAlign:"center",rotation:0}},{t:this.text_5,p:{x:-3.5235,y:-96.6275,text:"להתאים את עוצמת האור",scaleX:1.2447,scaleY:1.2447,font:"bold 12px 'Calibri'",textAlign:"center",lineHeight:16.65,lineWidth:140,rotation:0}},{t:this.text_4,p:{scaleX:0.7732,scaleY:0.7732,x:0.5477,y:-60.05,text:"שינוי קטן בעוצמת האור יאפשר לכך להשתמש בחדר כרגיל, אך יקטין משמעותית את חשבון החשמל",font:"16px 'Calibri'",lineHeight:21.55,lineWidth:326,textAlign:"center",rotation:0}},{t:this.text_3,p:{scaleX:0.7732,scaleY:0.7732,x:89.775,y:-5.1,text:"מחיר ממוצע של עמעם 3500 ש\"ח – הוצאה חד פעמית !שתחסוך  לכם בהמשך",font:"bold 12px 'Calibri'",textAlign:"right",lineHeight:16.65,lineWidth:281,rotation:0}},{t:this.text_2,p:{scaleX:0.7732,scaleY:0.7732,x:-3.819,y:-78.35,text:"לרמה הרצויה לכם ",font:"18px 'Calibri'",textAlign:"center",lineHeight:24,lineWidth:140,rotation:0}},{t:this.text_1,p:{x:89.7712,y:25.55,text:".ודאו שהעמעם בעל תו תקן ישראלי ובאישור  מכון התקנים",font:"bold 12px 'Calibri'",textAlign:"right",lineHeight:16.65,lineWidth:270,scaleX:0.7732,scaleY:0.7732,rotation:0}},{t:this.text,p:{scaleX:0.7732,scaleY:0.7732,x:89.7514,y:45.7,text:"מומלץ להתקין עמעם בעל זיכרון המאפשר הדלקה לפי .המצב האחרון",font:"bold 12px 'Calibri'",lineHeight:16.65,lineWidth:242,textAlign:"right",rotation:0}},{t:this.instance_2,p:{x:100.95,y:0.45}},{t:this.instance_1,p:{regX:0,x:100.95,y:30.7}},{t:this.instance,p:{x:100.95,y:50.1}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:2.05,y:-15.525,skewY:0}},{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{skewY:0,x:-10.4688,y:-43.5}},{t:this.shape_5,p:{skewY:0,x:15.8872,y:-14.85}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:19.0244,y:-19.8283,skewY:0}},{t:this.shape_4,p:{skewY:0,x:25.6084,y:-186.425}},{t:this.shape_3,p:{skewY:0,x:-81.55,y:-14.2833}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.7868,x:-8.4939,y:-43.5,skewY:0}},{t:this.shape_7,p:{scaleX:0.7868,x:12.2327,y:-14.775,skewY:0}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:15.3601,y:-19.8283,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:0.5806,x:4.7801,y:-46.15,skewY:0}},{t:this.shape_7,p:{scaleX:0.5806,x:20.0748,y:-17.425,skewY:0}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:23.2728,y:-22.4783,skewY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_8,p:{scaleX:0.5806,x:-17.8301,y:-35.65,skewY:180}},{t:this.shape_7,p:{scaleX:0.5806,x:-33.1248,y:-6.925,skewY:180}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:-36.3228,y:-11.9783,skewY:180}}]},1).to({state:[{t:this.shape_13},{t:this.shape_8,p:{scaleX:0.7868,x:1.1939,y:-38.25,skewY:180}},{t:this.shape_7,p:{scaleX:0.7868,x:-19.5327,y:-9.525,skewY:180}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:-22.6601,y:-14.5783,skewY:180}}]},1).to({state:[{t:this.shape_6,p:{skewY:180,x:13.8188,y:-40}},{t:this.shape_5,p:{skewY:180,x:-12.5372,y:-11.35}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:-15.6744,y:-16.3283,skewY:180}},{t:this.shape_4,p:{skewY:180,x:-22.2584,y:-182.925}},{t:this.shape_3,p:{skewY:180,x:84.9,y:-10.7833}}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:-0.1,y:-18.275}},{t:this.shape_20},{t:this.text_5,p:{x:0.7265,y:-108.6775,text:"!הנפיקו כרטיס רב – קו אישי",scaleX:1.2447,scaleY:1.2447,font:"bold 12px 'Calibri'",textAlign:"center",lineHeight:16.65,lineWidth:140,rotation:0}},{t:this.text_4,p:{scaleX:0.7732,scaleY:0.7732,x:91.3347,y:-26.15,text:"ניתן להוציא כרטיס רב-קו ראשון בעמדות הממוקמות .בתחנות מרכזיות – ללא תשלום",font:"bold 14px 'Calibri'",lineHeight:19.1,lineWidth:298,textAlign:"right",rotation:0}},{t:this.text_3,p:{scaleX:0.7732,scaleY:0.7732,x:-0.0015,y:-83.9978,text:"כרטיס הרב-קו תקף בכל אמצעי תחבורה בעזרת כרטיס אחד תוכלו לשלם בחברות השונות ובאמצעי התחבורה השונים",font:"16px 'Calibri'",textAlign:"center",lineHeight:21.55,lineWidth:290,rotation:0}},{t:this.text_2,p:{scaleX:0.7732,scaleY:0.7732,x:91.3415,y:5.65,text:"מומלץ לרכוש כרטיס רב-קו אשר כולל את הפרטים האישיים שלכם: שם, תמונה וכו  הכרטיס מכיל את הפרופיל שלכם לפי  ",font:"bold 14px 'Calibri'",textAlign:"right",lineHeight:19.1,lineWidth:275,rotation:0}},{t:this.text_1,p:{x:13.2311,y:33.95,text:"ההטבות וההנחות  ",font:"bold 16px 'Calibri'",textAlign:"right",lineHeight:21.55,lineWidth:206,scaleX:0.7732,scaleY:0.7732,rotation:0}},{t:this.instance_1,p:{regX:0,x:102.85,y:-20.8}},{t:this.instance,p:{x:102.85,y:12.1}},{t:this.text,p:{scaleX:0.7732,scaleY:0.7732,x:91.3811,y:52.55,text:". המגיעות לכם",font:"bold 16px 'Calibri'",lineHeight:21.55,lineWidth:206,textAlign:"right",rotation:0}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:2.05,y:-15.525,skewY:0}},{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{skewY:0,x:-10.4688,y:-43.5}},{t:this.shape_5,p:{skewY:0,x:15.8872,y:-14.85}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:19.0244,y:-19.8283,skewY:0}},{t:this.shape_4,p:{skewY:0,x:25.6084,y:-186.425}},{t:this.shape_3,p:{skewY:0,x:-81.55,y:-14.2833}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.7868,x:-8.4939,y:-43.5,skewY:0}},{t:this.shape_7,p:{scaleX:0.7868,x:12.2327,y:-14.775,skewY:0}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:15.3601,y:-19.8283,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:0.5806,x:4.7801,y:-46.15,skewY:0}},{t:this.shape_7,p:{scaleX:0.5806,x:20.0748,y:-17.425,skewY:0}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:23.2728,y:-22.4783,skewY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_8,p:{scaleX:0.5806,x:-17.8301,y:-35.65,skewY:180}},{t:this.shape_7,p:{scaleX:0.5806,x:-33.1248,y:-6.925,skewY:180}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:-36.3228,y:-11.9783,skewY:180}}]},1).to({state:[{t:this.shape_13},{t:this.shape_8,p:{scaleX:0.7868,x:1.1939,y:-38.25,skewY:180}},{t:this.shape_7,p:{scaleX:0.7868,x:-19.5327,y:-9.525,skewY:180}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:-22.6601,y:-14.5783,skewY:180}}]},1).to({state:[{t:this.shape_6,p:{skewY:180,x:13.8188,y:-40}},{t:this.shape_5,p:{skewY:180,x:-12.5372,y:-11.35}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:-15.6744,y:-16.3283,skewY:180}},{t:this.shape_4,p:{skewY:180,x:-22.2584,y:-182.925}},{t:this.shape_3,p:{skewY:180,x:84.9,y:-10.7833}}]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.text_4,p:{scaleX:1.2447,scaleY:1.2447,x:0.07,y:-112.7775,text:"טענו לכרטיס הרב קו מסלולים",font:"bold 12px 'Calibri'",lineHeight:16.65,lineWidth:143,textAlign:"center",rotation:0}},{t:this.text_3,p:{scaleX:0.7732,scaleY:0.7732,x:92.7932,y:-32.75,text:"מסלול חופשי חודשי מומלץ לנוסעים באופן קבוע .בתחבורה הציבורית – לדוגמא מהבית לעבודה וחזרה",font:"bold 14px 'Calibri'",textAlign:"right",lineHeight:19.1,lineWidth:290,rotation:0}},{t:this.text_2,p:{scaleX:0.7732,scaleY:0.7732,x:1.0985,y:-74.1978,text:"יומיים, שבועיים או חודשיים המוזילים את הסכום שתנצלו בכל נסיעה",font:"16px 'Calibri'",textAlign:"center",lineHeight:21.55,lineWidth:290,rotation:0}},{t:this.text_1,p:{x:92.7932,y:3.3,text:",במידה ואתם מתכננים נסיעות רבות במהלך היום .רכשו חוזה חופשי יומי ותהנו מחיסכון גדול",font:"bold 14px 'Calibri'",textAlign:"right",lineHeight:19.1,lineWidth:272,scaleX:0.7732,scaleY:0.7732,rotation:0}},{t:this.text,p:{scaleX:0.7732,scaleY:0.7732,x:92.8258,y:39.45,text:"  בחרו את המסלול לפי תקופת הזמן ואזורי .הנסיעה הרלוונטיים לכם ",font:"bold 14px 'Calibri'",lineHeight:19.1,lineWidth:251,textAlign:"right",rotation:0}},{t:this.instance_2,p:{x:102.95,y:-26}},{t:this.instance_1,p:{regX:0,x:102.95,y:9.6}},{t:this.instance,p:{x:102.95,y:44.45}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:2.05,y:-15.525,skewY:0}},{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{skewY:0,x:-10.4688,y:-43.5}},{t:this.shape_5,p:{skewY:0,x:15.8872,y:-14.85}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:19.0244,y:-19.8283,skewY:0}},{t:this.shape_4,p:{skewY:0,x:25.6084,y:-186.425}},{t:this.shape_3,p:{skewY:0,x:-81.55,y:-14.2833}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.7868,x:-8.4939,y:-43.5,skewY:0}},{t:this.shape_7,p:{scaleX:0.7868,x:12.2327,y:-14.775,skewY:0}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:15.3601,y:-19.8283,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:0.5806,x:4.7801,y:-46.15,skewY:0}},{t:this.shape_7,p:{scaleX:0.5806,x:20.0748,y:-17.425,skewY:0}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:23.2728,y:-22.4783,skewY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_8,p:{scaleX:0.5806,x:-17.8301,y:-35.65,skewY:180}},{t:this.shape_7,p:{scaleX:0.5806,x:-33.1248,y:-6.925,skewY:180}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:-36.3228,y:-11.9783,skewY:180}}]},1).to({state:[{t:this.shape_13},{t:this.shape_8,p:{scaleX:0.7868,x:1.1939,y:-38.25,skewY:180}},{t:this.shape_7,p:{scaleX:0.7868,x:-19.5327,y:-9.525,skewY:180}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:-22.6601,y:-14.5783,skewY:180}}]},1).to({state:[{t:this.shape_6,p:{skewY:180,x:13.8188,y:-40}},{t:this.shape_5,p:{skewY:180,x:-12.5372,y:-11.35}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:-15.6744,y:-16.3283,skewY:180}},{t:this.shape_4,p:{skewY:180,x:-22.2584,y:-182.925}},{t:this.shape_3,p:{skewY:180,x:84.9,y:-10.7833}}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.text_6,p:{scaleX:1.2447,scaleY:1.2447,x:0.07,y:-112.7775,text:"בדקו את זכאותכם להנחה",font:"bold 12px 'Calibri'",lineHeight:16.65,lineWidth:143,textAlign:"center",rotation:0}},{t:this.text_5,p:{x:97.6303,y:-21.55,text:"היכנסו לאתר משרד התחבורה וודאו האם אתם .זכאים .להנחה",scaleX:0.7732,scaleY:0.7732,font:"bold 14px 'Calibri'",textAlign:"right",lineHeight:19.1,lineWidth:288,rotation:0}},{t:this.text_4,p:{scaleX:0.7732,scaleY:0.7732,x:98.4607,y:-80.8478,text:"סטודנטים, ילדים מתחת גיל 18 ועוד רבים              זכאים  ",font:"16px 'Calibri'",lineHeight:21.55,lineWidth:261,textAlign:"right",rotation:0}},{t:this.text_3,p:{scaleX:0.7732,scaleY:0.7732,x:97.6661,y:15.95,text:"בחרו את הסיבה לזכאות להנחה באתר או באפליקציית !רב-קו אונלין, לא צריך להגיע לעמדת שירות",font:"bold 14px 'Calibri'",textAlign:"right",lineHeight:19.1,lineWidth:280,rotation:0}},{t:this.text_2,p:{scaleX:1.2447,scaleY:1.2447,x:31.6857,y:-63.8775,text:"להנחות נוספות ",font:"bold 10px 'Calibri'",textAlign:"center",lineHeight:14.2,lineWidth:58,rotation:0}},{t:this.text_1,p:{x:-4.821,y:-63.2978,text:"על המסלולים ",font:"16px 'Calibri'",textAlign:"right",lineHeight:21.55,lineWidth:87,scaleX:0.7732,scaleY:0.7732,rotation:0}},{t:this.text,p:{scaleX:0.7732,scaleY:0.7732,x:18.2729,y:-47.3478,text:"המוצעים",font:"16px 'Calibri'",lineHeight:21.55,lineWidth:62,textAlign:"right",rotation:0}},{t:this.instance_1,p:{regX:0,x:112.6,y:-16.3}},{t:this.instance,p:{x:112.6,y:22.9}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:2.05,y:-15.525,skewY:0}},{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{skewY:0,x:-10.4688,y:-43.5}},{t:this.shape_5,p:{skewY:0,x:15.8872,y:-14.85}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:19.0244,y:-19.8283,skewY:0}},{t:this.shape_4,p:{skewY:0,x:25.6084,y:-186.425}},{t:this.shape_3,p:{skewY:0,x:-81.55,y:-14.2833}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.7868,x:-8.4939,y:-43.5,skewY:0}},{t:this.shape_7,p:{scaleX:0.7868,x:12.2327,y:-14.775,skewY:0}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:15.3601,y:-19.8283,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:0.5806,x:4.7801,y:-46.15,skewY:0}},{t:this.shape_7,p:{scaleX:0.5806,x:20.0748,y:-17.425,skewY:0}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:23.2728,y:-22.4783,skewY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_8,p:{scaleX:0.5806,x:-17.8301,y:-35.65,skewY:180}},{t:this.shape_7,p:{scaleX:0.5806,x:-33.1248,y:-6.925,skewY:180}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:-36.3228,y:-11.9783,skewY:180}}]},1).to({state:[{t:this.shape_13},{t:this.shape_8,p:{scaleX:0.7868,x:1.1939,y:-38.25,skewY:180}},{t:this.shape_7,p:{scaleX:0.7868,x:-19.5327,y:-9.525,skewY:180}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:-22.6601,y:-14.5783,skewY:180}}]},1).to({state:[{t:this.shape_6,p:{skewY:180,x:14.8188,y:-40}},{t:this.shape_5,p:{skewY:180,x:-11.5372,y:-11.35}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:-14.6744,y:-16.3283,skewY:180}},{t:this.shape_4,p:{skewY:180,x:-21.2584,y:-182.925}},{t:this.shape_3,p:{skewY:180,x:85.9,y:-10.7833}}]},1).to({state:[{t:this.shape_28},{t:this.shape_30},{t:this.shape_27},{t:this.text_7,p:{scaleX:1.2447,scaleY:1.2447,rotation:0,x:0.07,y:-112.7775,text:"!התקינו חסכם",font:"bold 14px 'Calibri'",lineHeight:19.1,lineWidth:143}},{t:this.text_6,p:{scaleX:0.7732,scaleY:0.7732,x:93.8867,y:-31,text:"מומלץ לבחור בחסכם מפלסטיק שהוא עמיד בדיוק כמו .מברזל אך לא נוטה להחליד",font:"bold 14px 'Calibri'",lineHeight:19.1,lineWidth:280,textAlign:"right",rotation:0}},{t:this.text_5,p:{x:110.3357,y:-80.8478,text:"חסכם הוא התקן המותקן על פתחי צינורות                         ",scaleX:0.7732,scaleY:0.7732,font:"16px 'Calibri'",textAlign:"right",lineHeight:21.55,lineWidth:247,rotation:0}},{t:this.text_4,p:{scaleX:0.7732,scaleY:0.7732,x:93.8877,y:4.75,text:"וודאו תו כחול! זהו הסימן לכך שהחסכם עבר בדיקה .קפדנית והוא אכן חוסך במים",font:"bold 14px 'Calibri'",lineHeight:19.1,lineWidth:283,textAlign:"right",rotation:0}},{t:this.text_3,p:{scaleX:1.2447,scaleY:1.2447,x:1.441,y:-64.0775,text:"וחוסך כ3\\1 מכמות המים",font:"bold 10px 'Calibri'",textAlign:"center",lineHeight:14.2,lineWidth:114,rotation:0}},{t:this.text_2,p:{scaleX:0.7732,scaleY:0.7732,x:71.1799,y:-49.2478,text:" העובדים דרכו מבלי להרגיש",font:"16px 'Calibri'",textAlign:"right",lineHeight:21.55,lineWidth:181,rotation:0}},{t:this.text_1,p:{x:93.9082,y:34.3,text:"מחיר החסכם נע בין 25-50 ₪ - אל תתעצלו\n.בבדיקה",font:"bold 14px 'Calibri'",textAlign:"right",lineHeight:19.1,lineWidth:287,scaleX:0.7732,scaleY:0.7732,rotation:0}},{t:this.text,p:{scaleX:0.7732,scaleY:0.7732,x:79.3346,y:-64.1478,text:"מים",font:"16px 'Calibri'",lineHeight:21.55,lineWidth:30,textAlign:"right",rotation:0}},{t:this.instance_2,p:{x:103.8,y:-25.15}},{t:this.instance_1,p:{regX:0,x:103.8,y:10.8}},{t:this.instance,p:{x:103.8,y:40.35}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:2.05,y:-15.525,skewY:0}},{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{skewY:0,x:-10.4688,y:-43.5}},{t:this.shape_5,p:{skewY:0,x:15.8872,y:-14.85}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:19.0244,y:-19.8283,skewY:0}},{t:this.shape_4,p:{skewY:0,x:25.6084,y:-186.425}},{t:this.shape_3,p:{skewY:0,x:-81.55,y:-14.2833}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.7868,x:-8.4939,y:-43.5,skewY:0}},{t:this.shape_7,p:{scaleX:0.7868,x:12.2327,y:-14.775,skewY:0}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:15.3601,y:-19.8283,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:0.5806,x:4.7801,y:-46.15,skewY:0}},{t:this.shape_7,p:{scaleX:0.5806,x:20.0748,y:-17.425,skewY:0}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:23.2728,y:-22.4783,skewY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_8,p:{scaleX:0.5806,x:-17.8301,y:-35.65,skewY:180}},{t:this.shape_7,p:{scaleX:0.5806,x:-33.1248,y:-6.925,skewY:180}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:-36.3228,y:-11.9783,skewY:180}}]},1).to({state:[{t:this.shape_13},{t:this.shape_8,p:{scaleX:0.7868,x:1.1939,y:-38.25,skewY:180}},{t:this.shape_7,p:{scaleX:0.7868,x:-19.5327,y:-9.525,skewY:180}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:-22.6601,y:-14.5783,skewY:180}}]},1).to({state:[{t:this.shape_6,p:{skewY:180,x:14.8188,y:-40}},{t:this.shape_5,p:{skewY:180,x:-11.5372,y:-11.35}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:-14.6744,y:-16.3283,skewY:180}},{t:this.shape_4,p:{skewY:180,x:-21.2584,y:-182.925}},{t:this.shape_3,p:{skewY:180,x:85.9,y:-10.7833}}]},1).to({state:[{t:this.shape_31},{t:this.shape_28},{t:this.shape_27},{t:this.text_4,p:{scaleX:1.2447,scaleY:1.2447,x:0.07,y:-112.7775,text:"!סגרו את הברז",font:"bold 14px 'Calibri'",lineHeight:19.1,lineWidth:143,textAlign:"center",rotation:0}},{t:this.text_3,p:{scaleX:0.7732,scaleY:0.7732,x:95.868,y:28.8,text:"השרו כלים במים ובכך תקלו על הסיבון שלהם וגם .תקטינו את השימוש במים להורדת שאריות האוכל",font:"bold 14px 'Calibri'",textAlign:"right",lineHeight:19.1,lineWidth:267,rotation:0}},{t:this.text_2,p:{scaleX:0.7732,scaleY:0.7732,x:95.8434,y:-10.75,text:"צמצום של 2 דקות מזמן המקלחת יחסוך כ-40 ליטר .מים, שהם כ-25% מהצריכה היומית",font:"bold 14px 'Calibri'",textAlign:"right",lineHeight:19.1,lineWidth:280,rotation:0}},{t:this.text_1,p:{x:2.0542,y:-83.6775,text:"!ישנן פעולות בהן זרימת המים מיותרת ",font:"bold 10px 'Calibri'",textAlign:"center",lineHeight:14.2,lineWidth:159,scaleX:1.2447,scaleY:1.2447,rotation:0}},{t:this.text,p:{scaleX:0.7732,scaleY:0.7732,x:-1.9554,y:-60.1978,text:"חפיפה, סיבון כלים, גילוח וצחצוח שיניים – גם אם נסגור את הברז נוכל להמשיך לבצע את הפעולות ללא בעיה",font:"16px 'Calibri'",lineHeight:21.55,lineWidth:302,textAlign:"center",rotation:0}},{t:this.instance_1,p:{regX:0,x:106.5,y:-5.45}},{t:this.instance,p:{x:106.5,y:34}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:2.05,y:-15.525,skewY:0}},{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{skewY:0,x:-10.4688,y:-43.5}},{t:this.shape_5,p:{skewY:0,x:15.8872,y:-14.85}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:19.0244,y:-19.8283,skewY:0}},{t:this.shape_4,p:{skewY:0,x:25.6084,y:-186.425}},{t:this.shape_3,p:{skewY:0,x:-81.55,y:-14.2833}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.7868,x:-8.4939,y:-43.5,skewY:0}},{t:this.shape_7,p:{scaleX:0.7868,x:12.2327,y:-14.775,skewY:0}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:15.3601,y:-19.8283,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:0.5806,x:4.7801,y:-46.15,skewY:0}},{t:this.shape_7,p:{scaleX:0.5806,x:20.0748,y:-17.425,skewY:0}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:23.2728,y:-22.4783,skewY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_8,p:{scaleX:0.5806,x:-17.8301,y:-35.65,skewY:180}},{t:this.shape_7,p:{scaleX:0.5806,x:-33.1248,y:-6.925,skewY:180}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:-36.3228,y:-11.9783,skewY:180}}]},1).to({state:[{t:this.shape_13},{t:this.shape_8,p:{scaleX:0.7868,x:1.1939,y:-38.25,skewY:180}},{t:this.shape_7,p:{scaleX:0.7868,x:-19.5327,y:-9.525,skewY:180}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:-22.6601,y:-14.5783,skewY:180}}]},1).to({state:[{t:this.shape_6,p:{skewY:180,x:14.8188,y:-40}},{t:this.shape_5,p:{skewY:180,x:-11.5372,y:-11.35}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:-14.6744,y:-16.3283,skewY:180}},{t:this.shape_4,p:{skewY:180,x:-21.2584,y:-182.925}},{t:this.shape_3,p:{skewY:180,x:85.9,y:-10.7833}}]},1).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_27},{t:this.text_4,p:{scaleX:1.2447,scaleY:1.2447,x:-1.4581,y:-111.9775,text:"נצלו נכון את המים הזורמים ",font:"bold 14px 'Calibri'",lineHeight:19.1,lineWidth:121,textAlign:"center",rotation:0}},{t:this.text_3,p:{scaleX:0.7732,scaleY:0.7732,x:95.8508,y:7.95,text:"אספו בדלי את המים הקרים והשתמשו בהם להשקיית .הגינה, שטיפת הריצפה, הרתחת מים לקפה",font:"bold 14px 'Calibri'",textAlign:"right",lineHeight:19.1,lineWidth:293,rotation:0}},{t:this.text_2,p:{scaleX:1.2447,scaleY:1.2447,x:103.5079,y:-64.4775,text:" צריכת ברז המקלחת הינה כ- 20 ליטר לדקה ",font:"bold 10px 'Calibri'",textAlign:"right",lineHeight:14.2,lineWidth:169,rotation:0}},{t:this.text_1,p:{x:-0.1554,y:-30.5978,text:"שהמים במקלחת יתחממו, אפשר לייעל את תהליך ההמתנה",font:"16px 'Calibri'",textAlign:"center",lineHeight:21.55,lineWidth:325,scaleX:0.7732,scaleY:0.7732,rotation:0}},{t:this.text,p:{scaleX:0.7732,scaleY:0.7732,x:0.1305,y:-46.3478,text:"לכן בפעם הבאה שאנו מחכים בציפייה ",font:"16px 'Rubik'",lineHeight:22,lineWidth:238,textAlign:"center",rotation:0}},{t:this.instance,p:{x:106.5,y:14.35}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:2.05,y:-15.525,skewY:0}},{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{skewY:0,x:-10.4688,y:-43.5}},{t:this.shape_5,p:{skewY:0,x:15.8872,y:-14.85}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:19.0244,y:-19.8283,skewY:0}},{t:this.shape_4,p:{skewY:0,x:25.6084,y:-186.425}},{t:this.shape_3,p:{skewY:0,x:-81.55,y:-14.2833}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.7868,x:-8.4939,y:-43.5,skewY:0}},{t:this.shape_7,p:{scaleX:0.7868,x:12.2327,y:-14.775,skewY:0}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:15.3601,y:-19.8283,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:0.5806,x:4.7801,y:-46.15,skewY:0}},{t:this.shape_7,p:{scaleX:0.5806,x:20.0748,y:-17.425,skewY:0}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:23.2728,y:-22.4783,skewY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_8,p:{scaleX:0.5806,x:-17.8301,y:-35.65,skewY:180}},{t:this.shape_7,p:{scaleX:0.5806,x:-33.1248,y:-6.925,skewY:180}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:-36.3228,y:-11.9783,skewY:180}}]},1).to({state:[{t:this.shape_13},{t:this.shape_8,p:{scaleX:0.7868,x:1.1939,y:-38.25,skewY:180}},{t:this.shape_7,p:{scaleX:0.7868,x:-19.5327,y:-9.525,skewY:180}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:-22.6601,y:-14.5783,skewY:180}}]},1).to({state:[{t:this.shape_6,p:{skewY:180,x:14.8188,y:-40}},{t:this.shape_5,p:{skewY:180,x:-11.5372,y:-11.35}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:-14.6744,y:-16.3283,skewY:180}},{t:this.shape_4,p:{skewY:180,x:-21.2584,y:-182.925}},{t:this.shape_3,p:{skewY:180,x:85.9,y:-10.7833}}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_27},{t:this.text_3,p:{scaleX:1.2447,scaleY:1.2447,x:1.3231,y:-111.9775,text:"בעל מקצוע = הרבה כסף",font:"bold 13px 'Calibri'",textAlign:"center",lineHeight:17.9,lineWidth:144,rotation:0}},{t:this.text_2,p:{scaleX:0.7732,scaleY:0.7732,x:103.445,y:-16.1,text:"בדקו האם התקלה מחייבת בעל מקצוע או אם יש משהו .שאתם יכולים לעשות בעצמכם",font:"bold 14px 'Calibri'",textAlign:"right",lineHeight:19.1,lineWidth:300,rotation:0}},{t:this.text_1,p:{x:1.6002,y:-74.1478,text:"פעמים רבות ניתן לפתור את הבעיה בקלות ובעלות מינימלית ללא פנייה לבעל מקצוע",font:"16px 'Calibri'",textAlign:"center",lineHeight:21.55,lineWidth:272,scaleX:0.7732,scaleY:0.7732,rotation:0}},{t:this.text,p:{scaleX:0.7732,scaleY:0.7732,x:103.4201,y:16.6,text:"התייעצו עם בני משפחה וחברים, אולי גם הם חוו את .התקלה ויוכלו לעזור לכם במציאת פתרון",font:"bold 14px 'Calibri'",lineHeight:19.1,lineWidth:286,textAlign:"right",rotation:0}},{t:this.instance_1,p:{regX:0,x:113.55,y:-10.8}},{t:this.instance,p:{x:113.55,y:21.9}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:2.05,y:-15.525,skewY:0}},{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{skewY:0,x:-10.4688,y:-43.5}},{t:this.shape_5,p:{skewY:0,x:15.8872,y:-14.85}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:19.0244,y:-19.8283,skewY:0}},{t:this.shape_4,p:{skewY:0,x:25.6084,y:-186.425}},{t:this.shape_3,p:{skewY:0,x:-81.55,y:-14.2833}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.7868,x:-8.4939,y:-43.5,skewY:0}},{t:this.shape_7,p:{scaleX:0.7868,x:12.2327,y:-14.775,skewY:0}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:15.3601,y:-19.8283,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:0.5806,x:4.7801,y:-46.15,skewY:0}},{t:this.shape_7,p:{scaleX:0.5806,x:20.0748,y:-17.425,skewY:0}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:23.2728,y:-22.4783,skewY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_8,p:{scaleX:0.5806,x:-17.8301,y:-35.65,skewY:180}},{t:this.shape_7,p:{scaleX:0.5806,x:-33.1248,y:-6.925,skewY:180}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:-36.3228,y:-11.9783,skewY:180}}]},1).to({state:[{t:this.shape_13},{t:this.shape_8,p:{scaleX:0.7868,x:1.1939,y:-38.25,skewY:180}},{t:this.shape_7,p:{scaleX:0.7868,x:-19.5327,y:-9.525,skewY:180}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:-22.6601,y:-14.5783,skewY:180}}]},1).to({state:[{t:this.shape_6,p:{skewY:180,x:14.8188,y:-40}},{t:this.shape_5,p:{skewY:180,x:-11.5372,y:-11.35}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:-14.6744,y:-16.3283,skewY:180}},{t:this.shape_4,p:{skewY:180,x:-21.2584,y:-182.925}},{t:this.shape_3,p:{skewY:180,x:85.9,y:-10.7833}}]},1).to({state:[{t:this.shape_36},{t:this.shape_28},{t:this.shape_27},{t:this.text_4,p:{scaleX:1.2447,scaleY:1.2447,x:-40.0167,y:-94.3275,text:"!הכינו בבית",font:"bold 13px 'Calibri'",lineHeight:17.9,lineWidth:75,textAlign:"center",rotation:0}},{t:this.text_3,p:{scaleX:0.7732,scaleY:0.7732,x:101.8403,y:-54,text:"מומלץ להגביל את הרגלי צריכת המזון ממסעדות על פי .היכולת הכלכלית שלכם",font:"bold 14px 'Calibri'",textAlign:"right",lineHeight:19.1,lineWidth:282,rotation:0}},{t:this.text_2,p:{scaleX:0.7732,scaleY:0.7732,x:84.7582,y:-108.5978,text:"הפיתויים גדולים והעצלנות עוד יותר ",font:"16px 'Calibri'",textAlign:"right",lineHeight:21.55,lineWidth:224,rotation:0}},{t:this.text_1,p:{x:101.8354,y:-21.7,text:"כשבא לכם להתפנק ולא להוציא סכומים גדולים אפשר תמיד להכין ארוחה טעימה בבית, להתלבש יפה ואפילו לא .צריך להשאיר טיפ",font:"bold 14px 'Calibri'",textAlign:"right",lineHeight:19.1,lineWidth:292,scaleX:0.7732,scaleY:0.7732,rotation:0}},{t:this.text,p:{scaleX:0.7732,scaleY:0.7732,x:86.8542,y:-91.1478,text:"אל תשאבו לעצלנות",font:"16px 'Calibri'",lineHeight:21.55,lineWidth:127,textAlign:"right",rotation:0}},{t:this.instance_1,p:{regX:0,x:111.65,y:-48.15}},{t:this.instance,p:{x:111.65,y:-15.85}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:2.05,y:-15.525,skewY:0}},{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{skewY:0,x:-10.4688,y:-43.5}},{t:this.shape_5,p:{skewY:0,x:15.8872,y:-14.85}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:19.0244,y:-19.8283,skewY:0}},{t:this.shape_4,p:{skewY:0,x:25.6084,y:-186.425}},{t:this.shape_3,p:{skewY:0,x:-81.55,y:-14.2833}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.7868,x:-8.4939,y:-43.5,skewY:0}},{t:this.shape_7,p:{scaleX:0.7868,x:12.2327,y:-14.775,skewY:0}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:15.3601,y:-19.8283,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:0.5806,x:4.7801,y:-46.15,skewY:0}},{t:this.shape_7,p:{scaleX:0.5806,x:20.0748,y:-17.425,skewY:0}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:23.2728,y:-22.4783,skewY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_8,p:{scaleX:0.5806,x:-17.8301,y:-35.65,skewY:180}},{t:this.shape_7,p:{scaleX:0.5806,x:-33.1248,y:-6.925,skewY:180}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:-36.3228,y:-11.9783,skewY:180}}]},1).to({state:[{t:this.shape_13},{t:this.shape_8,p:{scaleX:0.7868,x:1.1939,y:-38.25,skewY:180}},{t:this.shape_7,p:{scaleX:0.7868,x:-19.5327,y:-9.525,skewY:180}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:-22.6601,y:-14.5783,skewY:180}}]},1).to({state:[{t:this.shape_6,p:{skewY:180,x:14.8188,y:-40}},{t:this.shape_5,p:{skewY:180,x:-11.5372,y:-11.35}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:-14.6744,y:-16.3283,skewY:180}},{t:this.shape_4,p:{skewY:180,x:-21.2584,y:-182.925}},{t:this.shape_3,p:{skewY:180,x:85.9,y:-10.7833}}]},1).to({state:[{t:this.shape_36},{t:this.shape_28},{t:this.shape_27},{t:this.text_1,p:{x:-0.5849,y:-106.8775,text:"עיצוב הבית לא חייב להיות !כזה ביג דיל",font:"bold 13px 'Calibri'",textAlign:"center",lineHeight:17.9,lineWidth:145,scaleX:1.2447,scaleY:1.2447,rotation:0}},{t:this.text,p:{scaleX:0.7732,scaleY:0.7732,x:100.5325,y:-49.05,text:"רשתות הסטוק תפסו תאוצה ומאפשרות אופציות רבות וטובות לעיצוב הבית במחירים נוחים וביננו, אין דבר יותר .כיף מדייט זוגי שכולל הרכבת רהיטים מאיקאה",font:"bold 14px 'Calibri'",lineHeight:19.1,lineWidth:293,textAlign:"right",rotation:0}},{t:this.instance,p:{x:109.2,y:-42}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:2.05,y:-15.525,skewY:0}},{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{skewY:0,x:-10.4688,y:-43.5}},{t:this.shape_5,p:{skewY:0,x:15.8872,y:-14.85}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:19.0244,y:-19.8283,skewY:0}},{t:this.shape_4,p:{skewY:0,x:25.6084,y:-186.425}},{t:this.shape_3,p:{skewY:0,x:-81.55,y:-14.2833}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.7868,x:-8.4939,y:-43.5,skewY:0}},{t:this.shape_7,p:{scaleX:0.7868,x:12.2327,y:-14.775,skewY:0}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:15.3601,y:-19.8283,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:0.5806,x:4.7801,y:-46.15,skewY:0}},{t:this.shape_7,p:{scaleX:0.5806,x:20.0748,y:-17.425,skewY:0}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:23.2728,y:-22.4783,skewY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_8,p:{scaleX:0.5806,x:-17.8301,y:-35.65,skewY:180}},{t:this.shape_7,p:{scaleX:0.5806,x:-33.1248,y:-6.925,skewY:180}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:-36.3228,y:-11.9783,skewY:180}}]},1).to({state:[{t:this.shape_13},{t:this.shape_8,p:{scaleX:0.7868,x:1.1939,y:-38.25,skewY:180}},{t:this.shape_7,p:{scaleX:0.7868,x:-19.5327,y:-9.525,skewY:180}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:-22.6601,y:-14.5783,skewY:180}}]},1).to({state:[{t:this.shape_6,p:{skewY:180,x:14.8188,y:-40}},{t:this.shape_5,p:{skewY:180,x:-11.5372,y:-11.35}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:-14.6744,y:-16.3283,skewY:180}},{t:this.shape_4,p:{skewY:180,x:-21.2584,y:-182.925}},{t:this.shape_3,p:{skewY:180,x:85.9,y:-10.7833}}]},1).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_21,p:{x:0.8,y:-17.925}},{t:this.text_3,p:{scaleX:1.2447,scaleY:1.2447,x:-0.4349,y:-106.4275,text:"תחזוקה נכונה ושוטפת ",font:"bold 11px 'Calibri'",textAlign:"center",lineHeight:15.4,lineWidth:145,rotation:0}},{t:this.text_2,p:{scaleX:0.7732,scaleY:0.7732,x:-3.0623,y:-27,text:"!לתחזק לתחזק לתחזק ",font:"bold 14px 'Calibri'",textAlign:"center",lineHeight:19.1,lineWidth:310,rotation:0}},{t:this.text_1,p:{x:1.5,y:-72.55,text:"לרכב מונעת תקלות ובעיות עתידיות, ולכן \nהסוד הגדול הוא ",font:"14px 'Calibri'",textAlign:"center",lineHeight:19.1,lineWidth:232,scaleX:1,scaleY:1,rotation:0}},{t:this.text,p:{scaleX:1,scaleY:1,x:87.25,y:-2.5,text:". הקפידו על מילוי אוויר בגלגלים\n .בדקו את כמות השמן והמים פעם בשבוע\n. טפלו בכל נורה שנדלקת ברכב",font:"bold 10px 'Calibri'",lineHeight:14.2,lineWidth:183,textAlign:"right",rotation:0}},{t:this.instance_2,p:{x:97.2,y:2.55}},{t:this.instance_1,p:{regX:0,x:97.2,y:17.9}},{t:this.instance,p:{x:97.2,y:31.75}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:2.05,y:-15.525,skewY:0}},{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{skewY:0,x:-10.4688,y:-43.5}},{t:this.shape_5,p:{skewY:0,x:15.8872,y:-14.85}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:19.0244,y:-19.8283,skewY:0}},{t:this.shape_4,p:{skewY:0,x:25.6084,y:-186.425}},{t:this.shape_3,p:{skewY:0,x:-81.55,y:-14.2833}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.7868,x:-8.4939,y:-43.5,skewY:0}},{t:this.shape_7,p:{scaleX:0.7868,x:12.2327,y:-14.775,skewY:0}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:15.3601,y:-19.8283,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:0.5806,x:4.7801,y:-46.15,skewY:0}},{t:this.shape_7,p:{scaleX:0.5806,x:20.0748,y:-17.425,skewY:0}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:23.2728,y:-22.4783,skewY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_8,p:{scaleX:0.5806,x:-17.8301,y:-35.65,skewY:180}},{t:this.shape_7,p:{scaleX:0.5806,x:-33.1248,y:-6.925,skewY:180}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:-36.3228,y:-11.9783,skewY:180}}]},1).to({state:[{t:this.shape_13},{t:this.shape_8,p:{scaleX:0.7868,x:1.1939,y:-38.25,skewY:180}},{t:this.shape_7,p:{scaleX:0.7868,x:-19.5327,y:-9.525,skewY:180}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:-22.6601,y:-14.5783,skewY:180}}]},1).to({state:[{t:this.shape_6,p:{skewY:180,x:14.8188,y:-40}},{t:this.shape_5,p:{skewY:180,x:-11.5372,y:-11.35}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:-14.6744,y:-16.3283,skewY:180}},{t:this.shape_4,p:{skewY:180,x:-21.2584,y:-182.925}},{t:this.shape_3,p:{skewY:180,x:85.9,y:-10.7833}}]},1).to({state:[{t:this.shape_41},{t:this.shape_40,p:{x:1.0468}},{t:this.shape_39},{t:this.text_3,p:{scaleX:0.7732,scaleY:0.7732,x:98.6441,y:-58.6242,text:" ובכך התאימו את הבחירה לצרכים שלך     ",font:"16px 'Calibri'",textAlign:"right",lineHeight:21.55,lineWidth:257,rotation:0.2352}},{t:this.text_2,p:{scaleX:0.7731,scaleY:0.7731,x:93.1141,y:-28.4972,text:" חשבו על מרחק נסיעה ממוצע ברמה יומית ועל .מאפייני הדרך\n כמה אנשים ישתמשו במכונית? קיים הבדל מהותי .בין רכב בו נוהג אדם אחד לבין רכב משפחתי\n שימו דגש לכל הצרכים הממשיים שלכם אל מול .התקציב שיש ברשותכם\n",font:"bold 14px 'Calibri'",textAlign:"right",lineHeight:19.1,lineWidth:269,rotation:-0.0136}},{t:this.text_1,p:{x:-0.987,y:-92.6533,text:"לפי המטרות שלכם",font:"bold 14px 'Calibri'",textAlign:"center",lineHeight:19.1,lineWidth:126,scaleX:1.2447,scaleY:1.2447,rotation:0.4538}},{t:this.text,p:{scaleX:1,scaleY:1,x:1.75,y:-115.2,text:"בחירת הרכב המתאים",font:"bold 14px 'Calibri'",lineHeight:19.1,lineWidth:152,textAlign:"center",rotation:0}},{t:this.instance_2,p:{x:102.45,y:-22.15}},{t:this.instance_1,p:{regX:0,x:102.45,y:8.05}},{t:this.instance,p:{x:102.45,y:37}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:2.05,y:-15.525,skewY:0}},{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{skewY:0,x:-10.4688,y:-43.5}},{t:this.shape_5,p:{skewY:0,x:15.8872,y:-14.85}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:19.0244,y:-19.8283,skewY:0}},{t:this.shape_4,p:{skewY:0,x:25.6084,y:-186.425}},{t:this.shape_3,p:{skewY:0,x:-81.55,y:-14.2833}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.7868,x:-8.4939,y:-43.5,skewY:0}},{t:this.shape_7,p:{scaleX:0.7868,x:12.2327,y:-14.775,skewY:0}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:15.3601,y:-19.8283,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:0.5806,x:4.7801,y:-46.15,skewY:0}},{t:this.shape_7,p:{scaleX:0.5806,x:20.0748,y:-17.425,skewY:0}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:23.2728,y:-22.4783,skewY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_8,p:{scaleX:0.5806,x:-17.8301,y:-35.65,skewY:180}},{t:this.shape_7,p:{scaleX:0.5806,x:-33.1248,y:-6.925,skewY:180}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:-36.3228,y:-11.9783,skewY:180}}]},1).to({state:[{t:this.shape_13},{t:this.shape_8,p:{scaleX:0.7868,x:1.1939,y:-38.25,skewY:180}},{t:this.shape_7,p:{scaleX:0.7868,x:-19.5327,y:-9.525,skewY:180}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:-22.6601,y:-14.5783,skewY:180}}]},1).to({state:[{t:this.shape_6,p:{skewY:180,x:14.8188,y:-40}},{t:this.shape_5,p:{skewY:180,x:-11.5372,y:-11.35}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:-14.6744,y:-16.3283,skewY:180}},{t:this.shape_4,p:{skewY:180,x:-21.2584,y:-182.925}},{t:this.shape_3,p:{skewY:180,x:85.9,y:-10.7833}}]},1).to({state:[{t:this.shape_43},{t:this.shape_40,p:{x:1.0468}},{t:this.shape_42},{t:this.text_2,p:{scaleX:1.2447,scaleY:1.2447,x:-4.1866,y:-63.9308,text:"בחירת הביטוח הנכון ",font:"bold 11px 'Calibri'",textAlign:"center",lineHeight:15.4,lineWidth:126,rotation:0.5029}},{t:this.text_1,p:{x:97.7784,y:-33.6673,text:" עלות הביטוח משתנה בין רכב לרכב לכן עדיף !לבדוק את מחיר הביטוח לפני\n מומלץ לעשות את כל ביטוחי הרכב באותה .החברה, במצב זה החברות מציעות תנאים מיוחדים\n ,ביטוח עדיף לעשות לנהג אחד או שניים ספציפית .דבר המוזיל משמעותית את המחיר\n",font:"bold 14px 'Calibri'",textAlign:"right",lineHeight:19.1,lineWidth:262,scaleX:0.7732,scaleY:0.7732,rotation:0.502}},{t:this.text,p:{scaleX:1.2446,scaleY:1.2446,x:-0.4823,y:-112.1994,text:"בחברה הנכונה והמתאימה !לכם ",font:"bold 14px 'Calibri'",lineHeight:19.1,lineWidth:152,textAlign:"center",rotation:0.9842}},{t:this.instance_2,p:{x:106.6,y:-28.65}},{t:this.instance_1,p:{regX:0,x:106.6,y:1.7}},{t:this.instance,p:{x:106.6,y:31.5}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:2.05,y:-15.525,skewY:0}},{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{skewY:0,x:-10.4688,y:-43.5}},{t:this.shape_5,p:{skewY:0,x:15.8872,y:-14.85}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:19.0244,y:-19.8283,skewY:0}},{t:this.shape_4,p:{skewY:0,x:25.6084,y:-186.425}},{t:this.shape_3,p:{skewY:0,x:-81.55,y:-14.2833}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.7868,x:-8.4939,y:-43.5,skewY:0}},{t:this.shape_7,p:{scaleX:0.7868,x:12.2327,y:-14.775,skewY:0}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:15.3601,y:-19.8283,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:0.5806,x:4.7801,y:-46.15,skewY:0}},{t:this.shape_7,p:{scaleX:0.5806,x:20.0748,y:-17.425,skewY:0}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:23.2728,y:-22.4783,skewY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_8,p:{scaleX:0.5806,x:-17.8301,y:-35.65,skewY:180}},{t:this.shape_7,p:{scaleX:0.5806,x:-33.1248,y:-6.925,skewY:180}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:-36.3228,y:-11.9783,skewY:180}}]},1).to({state:[{t:this.shape_13},{t:this.shape_8,p:{scaleX:0.7868,x:1.1939,y:-38.25,skewY:180}},{t:this.shape_7,p:{scaleX:0.7868,x:-19.5327,y:-9.525,skewY:180}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:-22.6601,y:-14.5783,skewY:180}}]},1).to({state:[{t:this.shape_6,p:{skewY:180,x:14.8188,y:-40}},{t:this.shape_5,p:{skewY:180,x:-11.5372,y:-11.35}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:-14.6744,y:-16.3283,skewY:180}},{t:this.shape_4,p:{skewY:180,x:-21.2584,y:-182.925}},{t:this.shape_3,p:{skewY:180,x:85.9,y:-10.7833}}]},1).to({state:[{t:this.shape_43},{t:this.shape_40,p:{x:1.0468}},{t:this.shape_42},{t:this.text_2,p:{scaleX:1.2447,scaleY:1.2447,x:-0.9377,y:-109.781,text:"חפשו את הדילים השווים \nוהמשתלמים ביותר",font:"bold 11px 'Calibri'",textAlign:"center",lineHeight:15.4,lineWidth:126,rotation:-0.4818}},{t:this.text_1,p:{x:92.4503,y:-20.9704,text:" כשאתם יוצאים לחופשה השתדלו למצוא דיל שיתאים לימי העבודה שלכם, כך לא תבזבזו .ותפסידו\nקראו תמיד את אותיות הקטנות, מה כולל ,המחיר, האם מדובר בדיל ליחיד או לזוג  האם .יש זמנים מוגדרים בהם ניתן למימוש",font:"bold 14px 'Calibri'",textAlign:"right",lineHeight:19.1,lineWidth:243,scaleX:0.7732,scaleY:0.7732,rotation:-0.4828}},{t:this.text,p:{scaleX:0.7732,scaleY:0.7732,x:-2.0612,y:-71.6697,text:"הרשת מלאה בקופונים והטבות המציעים דילים זולים לחופשות, מסעדות ופעילויות אטרקטיביות .בארץ ובחו\"ל",font:"16px 'Calibri'",lineHeight:21.55,lineWidth:285,textAlign:"center",rotation:-0.4828}},{t:this.instance_1,p:{regX:0,x:102.95,y:-14.85}},{t:this.instance,p:{x:102.95,y:29.7}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:2.05,y:-15.525,skewY:0}},{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{skewY:0,x:-10.4688,y:-43.5}},{t:this.shape_5,p:{skewY:0,x:15.8872,y:-14.85}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:19.0244,y:-19.8283,skewY:0}},{t:this.shape_4,p:{skewY:0,x:25.6084,y:-186.425}},{t:this.shape_3,p:{skewY:0,x:-81.55,y:-14.2833}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.7868,x:-8.4939,y:-43.5,skewY:0}},{t:this.shape_7,p:{scaleX:0.7868,x:12.2327,y:-14.775,skewY:0}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:15.3601,y:-19.8283,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:0.5806,x:4.7801,y:-46.15,skewY:0}},{t:this.shape_7,p:{scaleX:0.5806,x:20.0748,y:-17.425,skewY:0}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:23.2728,y:-22.4783,skewY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_8,p:{scaleX:0.5806,x:-17.8301,y:-35.65,skewY:180}},{t:this.shape_7,p:{scaleX:0.5806,x:-33.1248,y:-6.925,skewY:180}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:-36.3228,y:-11.9783,skewY:180}}]},1).to({state:[{t:this.shape_13},{t:this.shape_8,p:{scaleX:0.7868,x:1.1939,y:-38.25,skewY:180}},{t:this.shape_7,p:{scaleX:0.7868,x:-19.5327,y:-9.525,skewY:180}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:-22.6601,y:-14.5783,skewY:180}}]},1).to({state:[{t:this.shape_6,p:{skewY:180,x:14.8188,y:-40}},{t:this.shape_5,p:{skewY:180,x:-11.5372,y:-11.35}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:-14.6744,y:-16.3283,skewY:180}},{t:this.shape_4,p:{skewY:180,x:-21.2584,y:-182.925}},{t:this.shape_3,p:{skewY:180,x:85.9,y:-10.7833}}]},1).to({state:[{t:this.shape_43},{t:this.shape_40,p:{x:1.0468}},{t:this.shape_42},{t:this.text_5,p:{x:6.0607,y:-109.6551,text:"בצעו השוואת מחירים ",scaleX:1.2447,scaleY:1.2447,font:"bold 12px 'Calibri'",textAlign:"center",lineHeight:16.65,lineWidth:138,rotation:0.0091}},{t:this.text_4,p:{scaleX:0.7732,scaleY:0.7732,x:79.3327,y:-8.4027,text:" העזרו באתרי השוואת המחירים ובדקו איפה הכי .משתלם לכם לסגור את הדיל הבא\n,עוד לפני שאתם מזמינים מקום בבר או מסעדה הציצו .בתפריט ובדקו האם המחירים נוחים ומתאימים לכם \nהעזרו בהמלצות על יעדים משתלמים –  זכרו חופשה !לא מסתכמת בטיסה",font:"bold 12px 'Calibri'",lineHeight:16.65,lineWidth:242,textAlign:"right",rotation:0.009}},{t:this.text_3,p:{scaleX:0.7732,scaleY:0.7732,x:2.0115,y:-55.873,text:"הרשת מלאה בקופונים והטבות המציעים \n           לחופשות, מסעדות ופעילויות אטרקטיביות                                         ",font:"16px 'Calibri'",textAlign:"center",lineHeight:21.55,lineWidth:293,rotation:0.009}},{t:this.text_2,p:{scaleX:1.2447,scaleY:1.2447,x:4.4607,y:-83.0051,text:"ובדקו איפה הכי שווה לכם",font:"bold 11px 'Calibri'",textAlign:"center",lineHeight:15.4,lineWidth:138,rotation:0.0091}},{t:this.text_1,p:{x:41.1107,y:-24.4051,text:"דילים זולים",font:"bold 11px 'Calibri'",textAlign:"center",lineHeight:15.4,lineWidth:54,scaleX:1.2447,scaleY:1.2447,rotation:0.0091}},{t:this.instance_2,p:{x:89.05,y:23.65}},{t:this.instance_1,p:{regX:0,x:89.05,y:-3.95}},{t:this.instance,p:{x:89.05,y:48.95}},{t:this.text,p:{scaleX:0.7732,scaleY:0.7732,x:-16.1388,y:-24.5662,text:".בארץ ובחו\"ל  ",font:"16px 'Calibri'",lineHeight:21.55,lineWidth:89,textAlign:"center",rotation:0.009}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:2.05,y:-15.525,skewY:0}},{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{skewY:0,x:-10.4688,y:-43.5}},{t:this.shape_5,p:{skewY:0,x:15.8872,y:-14.85}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:19.0244,y:-19.8283,skewY:0}},{t:this.shape_4,p:{skewY:0,x:25.6084,y:-186.425}},{t:this.shape_3,p:{skewY:0,x:-81.55,y:-14.2833}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.7868,x:-8.4939,y:-43.5,skewY:0}},{t:this.shape_7,p:{scaleX:0.7868,x:12.2327,y:-14.775,skewY:0}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:15.3601,y:-19.8283,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:0.5806,x:4.7801,y:-46.15,skewY:0}},{t:this.shape_7,p:{scaleX:0.5806,x:20.0748,y:-17.425,skewY:0}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:23.2728,y:-22.4783,skewY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_8,p:{scaleX:0.5806,x:-17.8301,y:-35.65,skewY:180}},{t:this.shape_7,p:{scaleX:0.5806,x:-33.1248,y:-6.925,skewY:180}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:-36.3228,y:-11.9783,skewY:180}}]},1).to({state:[{t:this.shape_13},{t:this.shape_8,p:{scaleX:0.7868,x:1.1939,y:-38.25,skewY:180}},{t:this.shape_7,p:{scaleX:0.7868,x:-19.5327,y:-9.525,skewY:180}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:-22.6601,y:-14.5783,skewY:180}}]},1).to({state:[{t:this.shape_6,p:{skewY:180,x:14.8188,y:-40}},{t:this.shape_5,p:{skewY:180,x:-11.5372,y:-11.35}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:-14.6744,y:-16.3283,skewY:180}},{t:this.shape_4,p:{skewY:180,x:-21.2584,y:-182.925}},{t:this.shape_3,p:{skewY:180,x:85.9,y:-10.7833}}]},1).to({state:[{t:this.shape_43},{t:this.shape_40,p:{x:1.0468}},{t:this.shape_42},{t:this.text_4,p:{scaleX:1.2447,scaleY:1.2447,x:5.363,y:-120.6727,text:"-אפשר לעשות הכל  ",font:"bold 12px 'Calibri'",lineHeight:16.65,lineWidth:138,textAlign:"center",rotation:-0.3175}},{t:this.text_3,p:{scaleX:0.7732,scaleY:0.7732,x:91.9713,y:-0.3816,text:" מומלץ לבדוק מראש אילו הטבות באזור מעניקים לכם הכרטיסים שברשותכם ותכננו את היציאה בהתאם - לא חבל לשלם יותר על ארוחה ברשת אחת, כשבדיוק 20 מטר ממנו ישנה רשת נוספת שמציעה את אותו התפריט ב-15 .אחוזי הנחה.למחזיקי ?הכרטיס שבמקרה יש לכם ",font:"bold 12px 'Calibri'",textAlign:"right",lineHeight:16.65,lineWidth:249,rotation:-0.3166}},{t:this.text_2,p:{scaleX:0.7732,scaleY:0.7732,x:1.323,y:-73.2944,text:"קבעו לכם                בשבוע בו אתם יוצאים יחד \nכך גם שניהם תחכו בקוצר רוח למפגש המשותף וגם היציאות לא יהפכו תכופות ומעמיסות כלכלית",font:"16px 'Calibri'",textAlign:"center",lineHeight:21.55,lineWidth:293,rotation:-0.3166}},{t:this.text_1,p:{x:3.963,y:-93.9727,text:"?השאלה איך וכמה",font:"bold 11px 'Calibri'",textAlign:"center",lineHeight:15.4,lineWidth:138,scaleX:1.2447,scaleY:1.2447,rotation:-0.3175}},{t:this.text,p:{scaleX:1.2447,scaleY:1.2447,x:38.3804,y:-72.8486,text:"יום אחד",font:"bold 10px 'Calibri'",lineHeight:14.2,lineWidth:35,textAlign:"center",rotation:-0.3175}},{t:this.instance,p:{x:103.15,y:4.4}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:2.05,y:-15.525,skewY:0}},{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{skewY:0,x:-10.4688,y:-43.5}},{t:this.shape_5,p:{skewY:0,x:15.8872,y:-14.85}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:19.0244,y:-19.8283,skewY:0}},{t:this.shape_4,p:{skewY:0,x:25.6084,y:-186.425}},{t:this.shape_3,p:{skewY:0,x:-81.55,y:-14.2833}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.7868,x:-8.4939,y:-43.5,skewY:0}},{t:this.shape_7,p:{scaleX:0.7868,x:12.2327,y:-14.775,skewY:0}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:15.3601,y:-19.8283,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:0.5806,x:4.7801,y:-46.15,skewY:0}},{t:this.shape_7,p:{scaleX:0.5806,x:20.0748,y:-17.425,skewY:0}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:23.2728,y:-22.4783,skewY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_8,p:{scaleX:0.5806,x:-17.8301,y:-35.65,skewY:180}},{t:this.shape_7,p:{scaleX:0.5806,x:-33.1248,y:-6.925,skewY:180}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:-36.3228,y:-11.9783,skewY:180}}]},1).to({state:[{t:this.shape_13},{t:this.shape_8,p:{scaleX:0.7868,x:1.1939,y:-38.25,skewY:180}},{t:this.shape_7,p:{scaleX:0.7868,x:-19.5327,y:-9.525,skewY:180}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:-22.6601,y:-14.5783,skewY:180}}]},1).to({state:[{t:this.shape_6,p:{skewY:180,x:14.8188,y:-40}},{t:this.shape_5,p:{skewY:180,x:-11.5372,y:-11.35}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:-14.6744,y:-16.3283,skewY:180}},{t:this.shape_4,p:{skewY:180,x:-21.2584,y:-182.925}},{t:this.shape_3,p:{skewY:180,x:85.9,y:-10.7833}}]},1).to({state:[{t:this.shape_45},{t:this.shape_40,p:{x:1.0468}},{t:this.shape_44,p:{x:0.3656}},{t:this.text_8},{t:this.text_7,p:{scaleX:0.7732,scaleY:0.7732,rotation:0.7666,x:0.8259,y:-68.2506,text:",כמו בכל דבר בחיים, בצעו סקר שוק                                                         ",font:"16px 'Calibri'",lineHeight:21.55,lineWidth:236}},{t:this.text_6,p:{scaleX:1.2447,scaleY:1.2447,x:-30.2789,y:-48.8449,text:"ואל תפחדו להתמקח",font:"bold 11px 'Calibri'",lineHeight:15.4,lineWidth:96,textAlign:"center",rotation:0.767}},{t:this.text_5,p:{x:49.4765,y:20.8133,text:"!התמקחו",scaleX:1.2447,scaleY:1.2447,font:"bold 10px 'Rubik'",textAlign:"center",lineHeight:14.5,lineWidth:48,rotation:0.7144}},{t:this.text_4,p:{scaleX:1.2447,scaleY:1.2447,x:0.9146,y:-122.8282,text:"בצעו השוואת מחירים ",font:"bold 12px 'Calibri'",lineHeight:16.65,lineWidth:111,textAlign:"center",rotation:0.767}},{t:this.text_3,p:{scaleX:1.2447,scaleY:1.2447,x:0.9146,y:-96.1782,text:"ובדקו איפה הכי שווה לכם",font:"bold 11px 'Calibri'",textAlign:"center",lineHeight:15.4,lineWidth:117,rotation:0.767}},{t:this.text_2,p:{scaleX:0.7732,scaleY:0.7732,x:53.1742,y:-47.5786,text:"השוו מחירים ",font:"16px 'Calibri'",textAlign:"center",lineHeight:21.55,lineWidth:82,rotation:0.7666}},{t:this.instance_1,p:{regX:0,x:85,y:-2.6}},{t:this.instance,p:{x:85,y:29.2}},{t:this.text_1,p:{x:19.9867,y:22.4981,text:"-אל תתביישו לספר לנציג",font:"bold 14px 'Rubik'",textAlign:"right",lineHeight:19.55,lineWidth:152,scaleX:0.7732,scaleY:0.7732,rotation:0.7666}},{t:this.text,p:{scaleX:0.7732,scaleY:0.7732,x:0.8259,y:-28.0506,text:"!התחרות בשוק יכולה להועיל רק לכם",font:"16px 'Calibri'",lineHeight:21.55,lineWidth:236,textAlign:"center",rotation:0.7666}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:2.05,y:-15.525,skewY:0}},{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{skewY:0,x:-10.4688,y:-43.5}},{t:this.shape_5,p:{skewY:0,x:15.8872,y:-14.85}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:19.0244,y:-19.8283,skewY:0}},{t:this.shape_4,p:{skewY:0,x:25.6084,y:-186.425}},{t:this.shape_3,p:{skewY:0,x:-81.55,y:-14.2833}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.7868,x:-8.4939,y:-43.5,skewY:0}},{t:this.shape_7,p:{scaleX:0.7868,x:12.2327,y:-14.775,skewY:0}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:15.3601,y:-19.8283,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:0.5806,x:4.7801,y:-46.15,skewY:0}},{t:this.shape_7,p:{scaleX:0.5806,x:20.0748,y:-17.425,skewY:0}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:23.2728,y:-22.4783,skewY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_8,p:{scaleX:0.5806,x:-17.8301,y:-35.65,skewY:180}},{t:this.shape_7,p:{scaleX:0.5806,x:-33.1248,y:-6.925,skewY:180}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:-36.3228,y:-11.9783,skewY:180}}]},1).to({state:[{t:this.shape_13},{t:this.shape_8,p:{scaleX:0.7868,x:1.1939,y:-38.25,skewY:180}},{t:this.shape_7,p:{scaleX:0.7868,x:-19.5327,y:-9.525,skewY:180}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:-22.6601,y:-14.5783,skewY:180}}]},1).to({state:[{t:this.shape_6,p:{skewY:180,x:14.8188,y:-40}},{t:this.shape_5,p:{skewY:180,x:-11.5372,y:-11.35}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:-14.6744,y:-16.3283,skewY:180}},{t:this.shape_4,p:{skewY:180,x:-21.2584,y:-182.925}},{t:this.shape_3,p:{skewY:180,x:85.9,y:-10.7833}}]},1).to({state:[{t:this.shape_45},{t:this.shape_40,p:{x:1.0468}},{t:this.shape_44,p:{x:0.3656}},{t:this.text_3,p:{scaleX:1.2447,scaleY:1.2447,x:1.513,y:-78.3249,text:"שתספק לכם את כלל התשתיות בבית ",font:"bold 11px 'Calibri'",textAlign:"center",lineHeight:15.4,lineWidth:172,rotation:0.4924}},{t:this.text_2,p:{scaleX:0.7732,scaleY:0.7732,x:1.5959,y:-31.9844,text:" !חבילה כזו יכולה להיות משתלמת יותר עבורכם",font:"16px 'Calibri'",textAlign:"center",lineHeight:21.55,lineWidth:308,rotation:0.493}},{t:this.text_1,p:{x:101.3016,y:3.4741,text:" מומלץ לבחור במסלול \"טריפל\" אשר מציע מחיר .משתלם עבור טלוויזיה, אינטרנט   וקוו הטלפון ",font:"bold 14px 'Calibri'",textAlign:"right",lineHeight:19.1,lineWidth:287,scaleX:0.7732,scaleY:0.7732,rotation:0.493}},{t:this.text,p:{scaleX:1.2447,scaleY:1.2447,x:6.663,y:-117.1249,text:"בחרו חברה אחת",font:"bold 14px 'Calibri'",lineHeight:19.1,lineWidth:126,textAlign:"center",rotation:0.4924}},{t:this.instance,p:{x:111.1,y:9.85}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:2.05,y:-15.525,skewY:0}},{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{skewY:0,x:-10.4688,y:-43.5}},{t:this.shape_5,p:{skewY:0,x:15.8872,y:-14.85}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:19.0244,y:-19.8283,skewY:0}},{t:this.shape_4,p:{skewY:0,x:25.6084,y:-186.425}},{t:this.shape_3,p:{skewY:0,x:-81.55,y:-14.2833}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.7868,x:-8.4939,y:-43.5,skewY:0}},{t:this.shape_7,p:{scaleX:0.7868,x:12.2327,y:-14.775,skewY:0}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:15.3601,y:-19.8283,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:0.5806,x:4.7801,y:-46.15,skewY:0}},{t:this.shape_7,p:{scaleX:0.5806,x:20.0748,y:-17.425,skewY:0}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:23.2728,y:-22.4783,skewY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_8,p:{scaleX:0.5806,x:-17.8301,y:-35.65,skewY:180}},{t:this.shape_7,p:{scaleX:0.5806,x:-33.1248,y:-6.925,skewY:180}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:-36.3228,y:-11.9783,skewY:180}}]},1).to({state:[{t:this.shape_13},{t:this.shape_8,p:{scaleX:0.7868,x:1.1939,y:-38.25,skewY:180}},{t:this.shape_7,p:{scaleX:0.7868,x:-19.5327,y:-9.525,skewY:180}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:-22.6601,y:-14.5783,skewY:180}}]},1).to({state:[{t:this.shape_6,p:{skewY:180,x:14.8188,y:-40}},{t:this.shape_5,p:{skewY:180,x:-11.5372,y:-11.35}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:-14.6744,y:-16.3283,skewY:180}},{t:this.shape_4,p:{skewY:180,x:-21.2584,y:-182.925}},{t:this.shape_3,p:{skewY:180,x:85.9,y:-10.7833}}]},1).to({state:[{t:this.shape_46},{t:this.shape_40,p:{x:1.6468}},{t:this.shape_44,p:{x:0.967}},{t:this.text_3,p:{scaleX:1.2447,scaleY:1.2447,x:2.2146,y:-79.9637,text:"בדקו בתכיפות את מחיר החבילה",font:"bold 11px 'Calibri'",textAlign:"center",lineHeight:15.4,lineWidth:172,rotation:0.7411}},{t:this.text_2,p:{scaleX:0.7732,scaleY:0.7732,x:2.2477,y:-50.0284,text:" זהירות החברות בשוק לרוב יעלו את המחירים !לאחר !תקופת זמן",font:"16px 'Calibri'",textAlign:"center",lineHeight:21.55,lineWidth:308,rotation:0.7406}},{t:this.text_1,p:{x:84.9531,y:-3.273,text:" בכל שיחה בנושא הטבה\\הנחה וודאו את ,תקופת ההטבה, את המחיר לאחריה ובדקו אם .יש צורך בשדרוג\n בצעו מעקב אחר החשבונות ובמידת הצורך .בצעו סקר שוק מחדש",font:"bold 14px 'Calibri'",textAlign:"right",lineHeight:19.1,lineWidth:246,scaleX:0.7732,scaleY:0.7732,rotation:0.7406}},{t:this.text,p:{scaleX:1.2447,scaleY:1.2447,x:1.6146,y:-113.3637,text:"הישארו עם יד על הדופק",font:"bold 14px 'Calibri'",lineHeight:19.1,lineWidth:144,textAlign:"center",rotation:0.7411}},{t:this.instance_1,p:{regX:0,x:97,y:1.55}},{t:this.instance,p:{x:97,y:46.8}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:2.05,y:-15.525,skewY:0}},{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{skewY:0,x:-10.4688,y:-43.5}},{t:this.shape_5,p:{skewY:0,x:15.8872,y:-14.85}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:19.0244,y:-19.8283,skewY:0}},{t:this.shape_4,p:{skewY:0,x:25.6084,y:-186.425}},{t:this.shape_3,p:{skewY:0,x:-81.55,y:-14.2833}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.7868,x:-8.4939,y:-43.5,skewY:0}},{t:this.shape_7,p:{scaleX:0.7868,x:12.2327,y:-14.775,skewY:0}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:15.3601,y:-19.8283,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:0.5806,x:4.7801,y:-46.15,skewY:0}},{t:this.shape_7,p:{scaleX:0.5806,x:20.0748,y:-17.425,skewY:0}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:23.2728,y:-22.4783,skewY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_8,p:{scaleX:0.5806,x:-17.8301,y:-35.65,skewY:180}},{t:this.shape_7,p:{scaleX:0.5806,x:-33.1248,y:-6.925,skewY:180}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:-36.3228,y:-11.9783,skewY:180}}]},1).to({state:[{t:this.shape_13},{t:this.shape_8,p:{scaleX:0.7868,x:1.1939,y:-38.25,skewY:180}},{t:this.shape_7,p:{scaleX:0.7868,x:-19.5327,y:-9.525,skewY:180}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:-22.6601,y:-14.5783,skewY:180}}]},1).to({state:[{t:this.shape_6,p:{skewY:180,x:14.8188,y:-40}},{t:this.shape_5,p:{skewY:180,x:-11.5372,y:-11.35}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:-14.6744,y:-16.3283,skewY:180}},{t:this.shape_4,p:{skewY:180,x:-21.2584,y:-182.925}},{t:this.shape_3,p:{skewY:180,x:85.9,y:-10.7833}}]},1).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:0.6,y:-18.725,skewY:0}},{t:this.text_2,p:{scaleX:1.2447,scaleY:1.2447,x:0.4526,y:-103.0775,text:"ערכו רשימת קניות מסודרת ובצעו השוואת מחירים",font:"bold 13px 'Calibri'",textAlign:"center",lineHeight:17.9,lineWidth:149,rotation:0}},{t:this.text_1,p:{x:5.0042,y:-50.95,text:"אנחנו לא מצפים שתעברו בין חמישה סופרים שונים לבניית סל הקניות שלכם  - הזמן והדלק שווים לא מעט כסף אבל הפעילו שיקול דעת על פי הניסיון הצרכני שלכם",font:"16px 'Calibri Light'",textAlign:"center",lineHeight:21.55,lineWidth:314,scaleX:0.7732,scaleY:0.7732,rotation:0}},{t:this.text,p:{scaleX:0.7732,scaleY:0.7732,x:86.0921,y:25.0305,text:"הרשת מלאה באתרי הרשתות- ובפורומים להמלצות, הקדישו כמה דקות ותגלו היכן .נמצאים הדברים הטובים במחירים הזולים",font:"bold 14px 'Calibri'",lineHeight:19.1,lineWidth:240,textAlign:"right",rotation:0}},{t:this.instance,p:{x:96.3,y:30.75}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:2.05,y:-15.525,skewY:0}},{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{skewY:0,x:-10.4688,y:-43.5}},{t:this.shape_5,p:{skewY:0,x:15.8872,y:-14.85}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:19.0244,y:-19.8283,skewY:0}},{t:this.shape_4,p:{skewY:0,x:25.6084,y:-186.425}},{t:this.shape_3,p:{skewY:0,x:-81.55,y:-14.2833}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.7868,x:-8.4939,y:-43.5,skewY:0}},{t:this.shape_7,p:{scaleX:0.7868,x:12.2327,y:-14.775,skewY:0}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:15.3601,y:-19.8283,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:0.5806,x:4.7801,y:-46.15,skewY:0}},{t:this.shape_7,p:{scaleX:0.5806,x:20.0748,y:-17.425,skewY:0}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:23.2728,y:-22.4783,skewY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_8,p:{scaleX:0.5806,x:-17.8301,y:-35.65,skewY:180}},{t:this.shape_7,p:{scaleX:0.5806,x:-33.1248,y:-6.925,skewY:180}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:-36.3228,y:-11.9783,skewY:180}}]},1).to({state:[{t:this.shape_13},{t:this.shape_8,p:{scaleX:0.7868,x:1.1939,y:-38.25,skewY:180}},{t:this.shape_7,p:{scaleX:0.7868,x:-19.5327,y:-9.525,skewY:180}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:-22.6601,y:-14.5783,skewY:180}}]},1).to({state:[{t:this.shape_6,p:{skewY:180,x:14.8188,y:-40}},{t:this.shape_5,p:{skewY:180,x:-11.5372,y:-11.35}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:-14.6744,y:-16.3283,skewY:180}},{t:this.shape_4,p:{skewY:180,x:-21.2584,y:-182.925}},{t:this.shape_3,p:{skewY:180,x:85.9,y:-10.7833}}]},1).to({state:[{t:this.shape_48},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:0.6,y:-18.725,skewY:0}},{t:this.shape_47},{t:this.text_2,p:{scaleX:1.2447,scaleY:1.2447,x:-1.0735,y:-118.0775,text:"!קנו בחוכמה",font:"bold 13px 'Calibri'",textAlign:"center",lineHeight:17.9,lineWidth:83,rotation:0}},{t:this.text_1,p:{x:1.0903,y:-69.6,text:"חשבו על הרגלי השימוש בבית ובצעו את הקניות על פיהם",font:"16px 'Calibri Light'",textAlign:"center",lineHeight:21.55,lineWidth:297,scaleX:0.7732,scaleY:0.7732,rotation:0}},{t:this.text,p:{scaleX:0.7732,scaleY:0.7732,x:103.4254,y:-17.9695,text:"בדקו תאריכי תפוגה! אם ידוע שלא נאכל יותר מידי ממוצר מסויים והתוקף שלו כבר קרוב, אולי נשקול לוותר .עליו בקנייה הנוכחית",font:"bold 14px 'Calibri'",lineHeight:19.1,lineWidth:283,textAlign:"right",rotation:0}},{t:this.instance,p:{x:115.8,y:-13.3}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:2.05,y:-15.525,skewY:0}},{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{skewY:0,x:-10.4688,y:-43.5}},{t:this.shape_5,p:{skewY:0,x:15.8872,y:-14.85}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:19.0244,y:-19.8283,skewY:0}},{t:this.shape_4,p:{skewY:0,x:25.6084,y:-186.425}},{t:this.shape_3,p:{skewY:0,x:-81.55,y:-14.2833}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.7868,x:-8.4939,y:-43.5,skewY:0}},{t:this.shape_7,p:{scaleX:0.7868,x:12.2327,y:-14.775,skewY:0}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:15.3601,y:-19.8283,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:0.5806,x:4.7801,y:-46.15,skewY:0}},{t:this.shape_7,p:{scaleX:0.5806,x:20.0748,y:-17.425,skewY:0}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:23.2728,y:-22.4783,skewY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_8,p:{scaleX:0.5806,x:-17.8301,y:-35.65,skewY:180}},{t:this.shape_7,p:{scaleX:0.5806,x:-33.1248,y:-6.925,skewY:180}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:-36.3228,y:-11.9783,skewY:180}}]},1).to({state:[{t:this.shape_13},{t:this.shape_8,p:{scaleX:0.7868,x:1.1939,y:-38.25,skewY:180}},{t:this.shape_7,p:{scaleX:0.7868,x:-19.5327,y:-9.525,skewY:180}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:-22.6601,y:-14.5783,skewY:180}}]},1).to({state:[{t:this.shape_6,p:{skewY:180,x:14.8188,y:-40}},{t:this.shape_5,p:{skewY:180,x:-11.5372,y:-11.35}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:-14.6744,y:-16.3283,skewY:180}},{t:this.shape_4,p:{skewY:180,x:-21.2584,y:-182.925}},{t:this.shape_3,p:{skewY:180,x:85.9,y:-10.7833}}]},1).to({state:[{t:this.shape_47},{t:this.shape_48},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:0.6,y:-18.725,skewY:0}},{t:this.text_3,p:{scaleX:1.2447,scaleY:1.2447,x:-1.5473,y:-120.0775,text:"!זהירות! מבצעים                         ",font:"bold 13px 'Calibri'",textAlign:"center",lineHeight:17.9,lineWidth:100,rotation:0}},{t:this.text_2,p:{scaleX:0.7732,scaleY:0.7732,x:1.6403,y:-84.6,text:"!רכישה לא מתוכננת של מוצרים היא אסון",font:"bold 16px 'Calibri'",textAlign:"center",lineHeight:21.55,lineWidth:297,rotation:0}},{t:this.text_1,p:{x:102.2836,y:17.1305,text:"שימו לב שרכישת מוצרים לא הכרחיים רק בגלל שהם .מבצע עלולה לייקר משמעותית את סך הקניות שלכם",font:"bold 14px 'Calibri'",textAlign:"right",lineHeight:19.1,lineWidth:285,scaleX:0.7732,scaleY:0.7732,rotation:0}},{t:this.text,p:{scaleX:1,scaleY:1,x:1.3,y:-51.05,text:"הפיתוי לרכוש מוצרים שבמבצע פשוט בגלל שהם במבצע גדול, אבל אל תשכחו – הם עדיין עולים כסף",font:"14px 'Calibri Light'",lineHeight:19.1,lineWidth:243,textAlign:"center",rotation:0}},{t:this.instance,p:{x:112.4,y:21.45}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:2.05,y:-15.525,skewY:0}},{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{skewY:0,x:-10.4688,y:-43.5}},{t:this.shape_5,p:{skewY:0,x:15.8872,y:-14.85}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:19.0244,y:-19.8283,skewY:0}},{t:this.shape_4,p:{skewY:0,x:25.6084,y:-186.425}},{t:this.shape_3,p:{skewY:0,x:-81.55,y:-14.2833}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.7868,x:-8.4939,y:-43.5,skewY:0}},{t:this.shape_7,p:{scaleX:0.7868,x:12.2327,y:-14.775,skewY:0}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:15.3601,y:-19.8283,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:0.5806,x:4.7801,y:-46.15,skewY:0}},{t:this.shape_7,p:{scaleX:0.5806,x:20.0748,y:-17.425,skewY:0}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:23.2728,y:-22.4783,skewY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_8,p:{scaleX:0.5806,x:-17.8301,y:-35.65,skewY:180}},{t:this.shape_7,p:{scaleX:0.5806,x:-33.1248,y:-6.925,skewY:180}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:-36.3228,y:-11.9783,skewY:180}}]},1).to({state:[{t:this.shape_13},{t:this.shape_8,p:{scaleX:0.7868,x:1.1939,y:-38.25,skewY:180}},{t:this.shape_7,p:{scaleX:0.7868,x:-19.5327,y:-9.525,skewY:180}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:-22.6601,y:-14.5783,skewY:180}}]},1).to({state:[{t:this.shape_6,p:{skewY:180,x:14.8188,y:-40}},{t:this.shape_5,p:{skewY:180,x:-11.5372,y:-11.35}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:-14.6744,y:-16.3283,skewY:180}},{t:this.shape_4,p:{skewY:180,x:-21.2584,y:-182.925}},{t:this.shape_3,p:{skewY:180,x:85.9,y:-10.7833}}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49,p:{y:-18.325}},{t:this.text_3,p:{scaleX:1.2447,scaleY:1.2447,x:-0.0367,y:-84.3,text:"כסף קטן בכיסים",font:"bold 14px 'Calibri'",textAlign:"center",lineHeight:11.1,lineWidth:145,rotation:0}},{t:this.text_2,p:{scaleX:0.7732,scaleY:0.7732,x:105.5523,y:-41.8,text:"הכסף הקטן אמנם נראה שכיח אך הוא יצטבר ויוכל ,לשמש אתכם לשימושים מגוונים כמו הוצאה לא צפויה .השלמת קניות בסופר, בילויים ועוד",font:"14px 'Calibri'",textAlign:"right",lineHeight:19.1,lineWidth:273,rotation:0}},{t:this.text_1,p:{x:85.4861,y:18.15,text:"כאשר אתם נתקלים ב\"עודף עודף\" שימו את !המטבעות בצנצנת",font:"bold 14px 'Calibri'",textAlign:"right",lineHeight:19.1,lineWidth:259,scaleX:0.7732,scaleY:0.7732,rotation:0}},{t:this.text,p:{scaleX:1,scaleY:1,x:0,y:-106.2,text:"כולנו מסיימים את היום עם",font:"12px 'Rubik Medium'",lineHeight:17.05,lineWidth:158,textAlign:"center",rotation:0}},{t:this.instance,p:{x:100,y:22.4}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:2.05,y:-15.525,skewY:0}},{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{skewY:0,x:-10.4688,y:-43.5}},{t:this.shape_5,p:{skewY:0,x:15.8872,y:-14.85}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:19.0244,y:-19.8283,skewY:0}},{t:this.shape_4,p:{skewY:0,x:25.6084,y:-186.425}},{t:this.shape_3,p:{skewY:0,x:-81.55,y:-14.2833}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.7868,x:-8.4939,y:-43.5,skewY:0}},{t:this.shape_7,p:{scaleX:0.7868,x:12.2327,y:-14.775,skewY:0}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:15.3601,y:-19.8283,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:0.5806,x:4.7801,y:-46.15,skewY:0}},{t:this.shape_7,p:{scaleX:0.5806,x:20.0748,y:-17.425,skewY:0}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:23.2728,y:-22.4783,skewY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_8,p:{scaleX:0.5806,x:-17.8301,y:-35.65,skewY:180}},{t:this.shape_7,p:{scaleX:0.5806,x:-33.1248,y:-6.925,skewY:180}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:-36.3228,y:-11.9783,skewY:180}}]},1).to({state:[{t:this.shape_13},{t:this.shape_8,p:{scaleX:0.7868,x:1.1939,y:-38.25,skewY:180}},{t:this.shape_7,p:{scaleX:0.7868,x:-19.5327,y:-9.525,skewY:180}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:-22.6601,y:-14.5783,skewY:180}}]},1).to({state:[{t:this.shape_6,p:{skewY:180,x:14.8188,y:-40}},{t:this.shape_5,p:{skewY:180,x:-11.5372,y:-11.35}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:-14.6744,y:-16.3283,skewY:180}},{t:this.shape_4,p:{skewY:180,x:-21.2584,y:-182.925}},{t:this.shape_3,p:{skewY:180,x:85.9,y:-10.7833}}]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_49,p:{y:-19.125}},{t:this.text_2,p:{scaleX:1.2447,scaleY:1.2447,x:-0.0367,y:-85.1,text:"!צנצנת ההוצאות",font:"bold 14px 'Calibri'",textAlign:"center",lineHeight:11.1,lineWidth:145,rotation:0}},{t:this.text_1,p:{x:0.0023,y:-42.6,text:"בכל פעם שאתם מרגישים כי ביצעתם\n\"הוצאה כספית מיותרת – תנו עצמכם \"קנס תקבעו .סכום קבוע שיכנס בתור ה\"קנס\" לצנצנת",font:"14px 'Calibri'",textAlign:"center",lineHeight:19.1,lineWidth:273,scaleX:0.7732,scaleY:0.7732,rotation:0}},{t:this.text,p:{scaleX:0.7732,scaleY:0.7732,x:85.4562,y:17.35,text:"בסוף החודש, תוכלו להשתמש בקנסות .שהצטברו לצורך תשלום החשבונות החודשיים",font:"bold 14px 'Calibri'",lineHeight:19.1,lineWidth:241,textAlign:"right",rotation:0}},{t:this.instance,p:{x:100,y:23.2}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:2.05,y:-15.525,skewY:0}},{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{skewY:0,x:-10.4688,y:-43.5}},{t:this.shape_5,p:{skewY:0,x:15.8872,y:-14.85}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:19.0244,y:-19.8283,skewY:0}},{t:this.shape_4,p:{skewY:0,x:25.6084,y:-186.425}},{t:this.shape_3,p:{skewY:0,x:-81.55,y:-14.2833}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.7868,x:-8.4939,y:-43.5,skewY:0}},{t:this.shape_7,p:{scaleX:0.7868,x:12.2327,y:-14.775,skewY:0}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:15.3601,y:-19.8283,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:0.5806,x:4.7801,y:-46.15,skewY:0}},{t:this.shape_7,p:{scaleX:0.5806,x:20.0748,y:-17.425,skewY:0}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:23.2728,y:-22.4783,skewY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_8,p:{scaleX:0.5806,x:-17.8301,y:-35.65,skewY:180}},{t:this.shape_7,p:{scaleX:0.5806,x:-33.1248,y:-6.925,skewY:180}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:-36.3228,y:-11.9783,skewY:180}}]},1).to({state:[{t:this.shape_13},{t:this.shape_8,p:{scaleX:0.7868,x:1.1939,y:-38.25,skewY:180}},{t:this.shape_7,p:{scaleX:0.7868,x:-19.5327,y:-9.525,skewY:180}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:-22.6601,y:-14.5783,skewY:180}}]},1).to({state:[{t:this.shape_6,p:{skewY:180,x:14.8188,y:-40}},{t:this.shape_5,p:{skewY:180,x:-11.5372,y:-11.35}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:-14.6744,y:-16.3283,skewY:180}},{t:this.shape_4,p:{skewY:180,x:-21.2584,y:-182.925}},{t:this.shape_3,p:{skewY:180,x:85.9,y:-10.7833}}]},1).to({state:[{t:this.shape_52},{t:this.shape_53},{t:this.shape_49,p:{y:-19.125}},{t:this.text_2,p:{scaleX:1.2447,scaleY:1.2447,x:-0.0367,y:-85.1,text:"!צנצנת המעשים הטובים",font:"bold 14px 'Calibri'",textAlign:"center",lineHeight:11.1,lineWidth:145,rotation:0}},{t:this.text_1,p:{x:0.0023,y:-42.6,text:"הציבו צנצנת בכניסה לבית ובכל פעם שהצלחתם לחסוך או עשיתם צעד חיובי בהרגלי הצריכה הכניסו סכום סמלי אל הצנצנת",font:"14px 'Calibri'",textAlign:"center",lineHeight:19.1,lineWidth:273,scaleX:0.7732,scaleY:0.7732,rotation:0}},{t:this.text,p:{scaleX:0.7732,scaleY:0.7732,x:79.4547,y:17.35,text:"  כאשר הצנצנת מתמלאת עד גבול מסוים\n!פנקו את עצמכם על התנהגותכם טובה !הרווחתם את זה",font:"bold 14px 'Calibri'",lineHeight:19.1,lineWidth:221,textAlign:"right",rotation:0}},{t:this.instance,p:{x:95.2,y:22.4}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:2.05,y:-15.525,skewY:0}},{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{skewY:0,x:-10.4688,y:-43.5}},{t:this.shape_5,p:{skewY:0,x:15.8872,y:-14.85}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:19.0244,y:-19.8283,skewY:0}},{t:this.shape_4,p:{skewY:0,x:25.6084,y:-186.425}},{t:this.shape_3,p:{skewY:0,x:-81.55,y:-14.2833}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.7868,x:-8.4939,y:-43.5,skewY:0}},{t:this.shape_7,p:{scaleX:0.7868,x:12.2327,y:-14.775,skewY:0}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:15.3601,y:-19.8283,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:0.5806,x:4.7801,y:-46.15,skewY:0}},{t:this.shape_7,p:{scaleX:0.5806,x:20.0748,y:-17.425,skewY:0}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:23.2728,y:-22.4783,skewY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_8,p:{scaleX:0.5806,x:-17.8301,y:-35.65,skewY:180}},{t:this.shape_7,p:{scaleX:0.5806,x:-33.1248,y:-6.925,skewY:180}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:-36.3228,y:-11.9783,skewY:180}}]},1).to({state:[{t:this.shape_13},{t:this.shape_8,p:{scaleX:0.7868,x:1.1939,y:-38.25,skewY:180}},{t:this.shape_7,p:{scaleX:0.7868,x:-19.5327,y:-9.525,skewY:180}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:-22.6601,y:-14.5783,skewY:180}}]},1).to({state:[{t:this.shape_6,p:{skewY:180,x:14.8188,y:-40}},{t:this.shape_5,p:{skewY:180,x:-11.5372,y:-11.35}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:-14.6744,y:-16.3283,skewY:180}},{t:this.shape_4,p:{skewY:180,x:-21.2584,y:-182.925}},{t:this.shape_3,p:{skewY:180,x:85.9,y:-10.7833}}]},1).to({state:[{t:this.shape_55},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:0.6,y:-19.125,skewY:0}},{t:this.shape_54},{t:this.text_3,p:{scaleX:1.2447,scaleY:1.2447,x:-0.0867,y:-104.5,text:"ששווה לכם",font:"bold 16px 'Calibri'",textAlign:"center",lineHeight:13.55,lineWidth:82,rotation:0}},{t:this.text_2,p:{scaleX:0.7732,scaleY:0.7732,x:109.3664,y:-57.4,text:"רכשו מנויים וכרטיסי חבר מועדון במקומות הבילוי והקניות המועדפים עליכם בלבד וכך תזכו להנחות שוות שבאמת תהנו בהם",font:"14px 'Calibri'",textAlign:"right",lineHeight:19.1,lineWidth:296,rotation:0}},{t:this.text_1,p:{x:89.8517,y:-5.7,text:"מנויים וכרטיסי מועדון לרוב ינסו לפתות אותנו במבצעים שרק יגרמו לנו להוציא יותר כסף, לכן מומלץ לרכוש מנוי איפה !שאנחנו באמת אוהבים .לאכול\\לקנות",font:"bold 14px 'Calibri'",textAlign:"right",lineHeight:19.1,lineWidth:247,scaleX:0.7732,scaleY:0.7732,rotation:0}},{t:this.instance,p:{x:103.55,y:0}},{t:this.text,p:{scaleX:1.2447,scaleY:1.2447,x:-0.107,y:-123.25,text:"בחרו את המקומות\n\n לעשות בהם מנוי",font:"12px 'Calibri Light'",lineHeight:16.65,lineWidth:188,textAlign:"center",rotation:0}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:2.05,y:-15.525,skewY:0}},{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{skewY:0,x:-10.4688,y:-43.5}},{t:this.shape_5,p:{skewY:0,x:15.8872,y:-14.85}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:19.0244,y:-19.8283,skewY:0}},{t:this.shape_4,p:{skewY:0,x:25.6084,y:-186.425}},{t:this.shape_3,p:{skewY:0,x:-81.55,y:-14.2833}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.7868,x:-8.4939,y:-43.5,skewY:0}},{t:this.shape_7,p:{scaleX:0.7868,x:12.2327,y:-14.775,skewY:0}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:15.3601,y:-19.8283,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:0.5806,x:4.7801,y:-46.15,skewY:0}},{t:this.shape_7,p:{scaleX:0.5806,x:20.0748,y:-17.425,skewY:0}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:23.2728,y:-22.4783,skewY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_8,p:{scaleX:0.5806,x:-17.8301,y:-35.65,skewY:180}},{t:this.shape_7,p:{scaleX:0.5806,x:-33.1248,y:-6.925,skewY:180}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:-36.3228,y:-11.9783,skewY:180}}]},1).to({state:[{t:this.shape_13},{t:this.shape_8,p:{scaleX:0.7868,x:1.1939,y:-38.25,skewY:180}},{t:this.shape_7,p:{scaleX:0.7868,x:-19.5327,y:-9.525,skewY:180}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:-22.6601,y:-14.5783,skewY:180}}]},1).to({state:[{t:this.shape_6,p:{skewY:180,x:14.8188,y:-40}},{t:this.shape_5,p:{skewY:180,x:-11.5372,y:-11.35}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:-14.6744,y:-16.3283,skewY:180}},{t:this.shape_4,p:{skewY:180,x:-21.2584,y:-182.925}},{t:this.shape_3,p:{skewY:180,x:85.9,y:-10.7833}}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:0.6,y:-19.125,skewY:0}},{t:this.text_4,p:{scaleX:1.2447,scaleY:1.2447,x:0.6133,y:-108.85,text:"בצעו השוואת מחירים ",font:"bold 14px 'Calibri'",lineHeight:11.1,lineWidth:145,textAlign:"center",rotation:0}},{t:this.text_3,p:{scaleX:0.7732,scaleY:0.7732,x:82.0517,y:-59.6,text:",כמו בכל דבר בחיים, בצעו סקר שוק\nהשוו מחירים\n!והתחרות בשוק יכולה להועיל רק לכם",font:"14px 'Calibri'",textAlign:"right",lineHeight:19.1,lineWidth:211,rotation:0}},{t:this.text_2,p:{scaleX:1.2447,scaleY:1.2447,x:0.5718,y:-88.75,text:"ובדקו איפה הכי שווה לכם",font:"12px 'Calibri Light'",textAlign:"center",lineHeight:16.65,lineWidth:158,rotation:0}},{t:this.text_1,p:{x:30.038,y:-44.35,text:",ואל תפחדו להתמקח",font:"bold 14px 'Calibri'",textAlign:"right",lineHeight:19.1,lineWidth:128,scaleX:0.7732,scaleY:0.7732,rotation:0}},{t:this.text,p:{scaleX:0.7732,scaleY:0.7732,x:86.2301,y:5.25,text:"בדקו והשוואו בין ההצעות השונות המנוי לחדר הכושר, הקאנטרי, מנויים להצגות, אם תמצאו הצעה זולה יותר מזו שאתם משלמים תוכלו .לחסוך הרבה כסף",font:"bold 14px 'Calibri'",lineHeight:19.1,lineWidth:252,textAlign:"right",rotation:0}},{t:this.instance,p:{x:98.4,y:10.05}}]},1).to({state:[{t:this.shape_2},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:2.05,y:-15.525,skewY:0}},{t:this.shape}]},1).to({state:[{t:this.shape_6,p:{skewY:0,x:-10.4688,y:-43.5}},{t:this.shape_5,p:{skewY:0,x:15.8872,y:-14.85}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:19.0244,y:-19.8283,skewY:0}},{t:this.shape_4,p:{skewY:0,x:25.6084,y:-186.425}},{t:this.shape_3,p:{skewY:0,x:-81.55,y:-14.2833}}]},1).to({state:[{t:this.shape_9},{t:this.shape_8,p:{scaleX:0.7868,x:-8.4939,y:-43.5,skewY:0}},{t:this.shape_7,p:{scaleX:0.7868,x:12.2327,y:-14.775,skewY:0}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:15.3601,y:-19.8283,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_8,p:{scaleX:0.5806,x:4.7801,y:-46.15,skewY:0}},{t:this.shape_7,p:{scaleX:0.5806,x:20.0748,y:-17.425,skewY:0}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:23.2728,y:-22.4783,skewY:0}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12},{t:this.shape_8,p:{scaleX:0.5806,x:-17.8301,y:-35.65,skewY:180}},{t:this.shape_7,p:{scaleX:0.5806,x:-33.1248,y:-6.925,skewY:180}},{t:this.shape_1,p:{scaleX:0.5943,scaleY:1.1024,x:-36.3228,y:-11.9783,skewY:180}}]},1).to({state:[{t:this.shape_13},{t:this.shape_8,p:{scaleX:0.7868,x:1.1939,y:-38.25,skewY:180}},{t:this.shape_7,p:{scaleX:0.7868,x:-19.5327,y:-9.525,skewY:180}},{t:this.shape_1,p:{scaleX:0.7946,scaleY:1.1024,x:-22.6601,y:-14.5783,skewY:180}}]},1).to({state:[{t:this.shape_6,p:{skewY:180,x:14.8188,y:-40}},{t:this.shape_5,p:{skewY:180,x:-11.5372,y:-11.35}},{t:this.shape_1,p:{scaleX:0.9672,scaleY:1.1024,x:-14.6744,y:-16.3283,skewY:180}},{t:this.shape_4,p:{skewY:180,x:-21.2584,y:-182.925}},{t:this.shape_3,p:{skewY:180,x:85.9,y:-10.7833}}]},1).to({state:[{t:this.shape_54},{t:this.shape_55},{t:this.shape_1,p:{scaleX:1,scaleY:1,x:0.6,y:-19.125,skewY:0}},{t:this.text_2,p:{scaleX:1.2447,scaleY:1.2447,x:0.0133,y:-108.85,text:"וודאו שההוצאה על המנוי אכן משתלמת",font:"bold 14px 'Calibri'",textAlign:"center",lineHeight:13.1,lineWidth:145,rotation:0}},{t:this.text_1,p:{x:-0.5164,y:-51.1,text:"רכישת מנוי לעיתים כרוכה בתשלום חד פעמי או תשלום שנתי, חשוב שנשים לב\n?האם המנוי באמת חוסך",font:"14px 'Calibri'",textAlign:"center",lineHeight:19.1,lineWidth:282,scaleX:0.7732,scaleY:0.7732,rotation:0}},{t:this.text,p:{scaleX:0.7732,scaleY:0.7732,x:86.8532,y:13.2957,text:"בדקו מה המנוי מציע לכם מול ההטבות שאתם !מקבלים עבור רכישת המנוי",font:"bold 14px 'Calibri'",lineHeight:19.1,lineWidth:246,textAlign:"right",rotation:0.4399}},{t:this.instance,p:{x:97.65,y:18.75}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(4).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.7,-188.8,347.29999999999995,352.5);


(lib.coin_change = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// coin
	this.coin_txt = new cjs.Text("כסף קטן", "bold 13px 'Calibri'", "#F1F1F1");
	this.coin_txt.name = "coin_txt";
	this.coin_txt.textAlign = "center";
	this.coin_txt.lineHeight = 16;
	this.coin_txt.lineWidth = 37;
	this.coin_txt.parent = this;
	this.coin_txt.setTransform(230.25,67.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FED80F").s().p("Ai3C3IgJgKIA0g4IABABIAHAIQA3A3BOAAQBOAAA3g3QA3g3AAhNQAAhPg3g3IgKgJIAxgrIAKAKQBMBLAABrQAABrhMBMQhMBMhrAAQhrAAhMhMgAjxBhQgKgZgEgcIBEg7IAAAJQAAAdAIAbIACAHIg8AxIgEgJgAkCgXQAIhcBDhDQBAhBBXgKIANgBIjvD1IAAgKgAAyi9QgYgHgZAAIgHABIA1g8QAbAFAZAKIAHADIg0AxIgEgBg");
	this.shape.setTransform(229.975,83.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEF064").s().p("AjCCVIA9gxQALAhAZAcIg0A4QgdgfgQglgAjVBNQgCgQAAgRIAAgPIDuj0IAUAAQATgBATADIAKABIg3A8IgIABQg0AEgqAfQgMAJgLAKQgWAXgNAbQgSAigCAoIAAAAIhEA9IgBgLgACkhsQgegaglgKIA0gyQAiAPAdAaIAFAEIgyArIgDgCg");
	this.shape_1.setTransform(225.65,79.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4B500").s().p("AiFCGIgHgIIgBgBQgZgcgLghIgDgHQgIgbAAgdIAAgJIAAAAQACgpASgiQANgbAWgXQAMgKAMgJQApgfA1gEIAIgBIAHAAQAaAAAYAHIADABQAlAKAfAaIADACIAKAJQA3A4AABOQAABOg3A3Qg4A3hOAAQhNAAg4g3g");
	this.shape_2.setTransform(230.025,83.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4B500").s().p("AiJCLIgIgIIgBgBQgagdgNgjIgCgHQgIgbgBggIABgIIAAgBQACgqASgkQAOgbAYgYQALgLAMgKQAsgfA2gFIAJAAIAHAAQAbAAAZAGIADABQAnALAgAbIACACIALAKQA5A6ABBQQgBBRg5A6Qg5A5hSAAQhQAAg5g5g");
	this.shape_3.setTransform(230,84.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEF064").s().p("AjKCbIA/gzQAMAiAaAdIg2A6QgeghgRglgAjeBQQgCgSAAgRIAAgPID4j+IAVAAQAUAAATADIAKABIg5A+IgJABQg1AEgrAgQgNAJgLALQgYAYgOAcQgSAjgCApIAAABIhHA/IgBgLgACrhxQgggbgmgLIA2gyQAjAQAeAZIAFAFIgzAtIgDgDg");
	this.shape_4.setTransform(225.475,80.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FED80F").s().p("Ai+C+IgKgKIA2g6IABABIAIAIQA6A6BQgBQBRABA5g6QA6g6AAhQQAAhRg6g6IgKgJIA0gtIAKAKQBPBPgBBvQABBwhPBOQhQBPhvAAQhvAAhPhPgAj6BlQgLgagEgdIBHg+IgBAJQAAAfAJAcIACAHIg/AzIgDgJgAkMgZQAIhgBGhFQBChCBagLIAOgCIj4D/IAAgLgAA0jFQgYgGgbAAIgHAAIA3g+QAcAFAbAKIAHAEIg3AyIgEgBg");
	this.shape_5.setTransform(229.95,84.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E6E5E5").s().p("AiFCGIgHgIIgBgBQgZgcgLghIgDgHQgIgaAAgfIAAgHIAAgBQACgpASgjQANgaAWgWQAMgMAMgIQApgfA1gEIAIAAIAHgBQAaAAAYAHIADABQAlAKAfAaIACACIALAKQA3A3AABNQAABPg3A3Qg4A3hOAAQhNAAg4g3g");
	this.shape_6.setTransform(229.925,84);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F1F1F1").s().p("Ai3C3IgJgKIA0g4IABABIAHAIQA3A3BNAAQBPAAA3g3QA3g3AAhOQAAhNg3g4IgKgKIAxgqIAKAKQBMBLAABrQAABrhMBMQhMBMhrAAQhrAAhMhMgAjxBhQgKgZgEgcIBEg7IAAAIQAAAeAIAbIACAGIg8AyIgEgJgAkCgYQAIhbBDhDQBAhABWgLIAOgBIjvD1IAAgLgAAyi9QgYgHgaAAIgGABIA1g8QAbAFAZAKIAHADIg0AxIgEgBg");
	this.shape_7.setTransform(229.875,84.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F6F6F6").s().p("AjCCVIA9gxQALAhAZAcIg0A4QgdgfgQglgAjVBNQgCgQAAgRIAAgPIDujzIAUgBQATgBATADIAKABIg3A9IgIAAQg0AEgqAfQgMAIgLAMQgXAWgMAaQgSAjgCAoIAAABIhEA8IgBgLgAClhsQgfgaglgKIA0gyQAiAPAcAaIAGAEIgyArIgCgCg");
	this.shape_8.setTransform(225.55,80.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.coin_txt,p:{x:230.25,y:67.1}}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.coin_txt,p:{x:229.05,y:66.8}}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.coin_txt,p:{x:229.05,y:65.9}}]},1).wait(1));

	// heigh
	this.instance = new lib.coin_heigh();
	this.instance.setTransform(229.9,84.8);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,60);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(140,-5.1,184,184);


(lib.bag_info = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1));

	// Layer_1
	this.text = new cjs.Text("חצו על אחד המטבעות כדי לגלות איך תוכלו לחסוך ", "bold 40px 'Calibri'", "#DFB83A");
	this.text.textAlign = "center";
	this.text.lineHeight = 49;
	this.text.lineWidth = 437;
	this.text.parent = this;
	this.text.setTransform(167.3405,-50,0.293,0.293);

	this.text_1 = new cjs.Text("וזו רק דוגמא קטנה להוצאות מהסוג הזה", "40px 'Calibri'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 49;
	this.text_1.lineWidth = 393;
	this.text_1.parent = this;
	this.text_1.setTransform(167.3174,-81.2172,0.293,0.293);

	this.text_2 = new cjs.Text("3,000 ₪\n16,560 ₪\n6,160 ₪", "bold 35px 'Calibri'", "#FFFFFF");
	this.text_2.lineHeight = 43;
	this.text_2.lineWidth = 151;
	this.text_2.parent = this;
	this.text_2.setTransform(119.0265,-132.5419,0.293,0.293);

	this.text_3 = new cjs.Text("-מכון כושר\n-רכב\n-בילויים", "40px 'Calibri'", "#FFFFFF");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 49;
	this.text_3.parent = this;
	this.text_3.setTransform(214.9198,-132.55,0.293,0.293);

	this.text_4 = new cjs.Text("כמה אתם משלמים על ?מותרות בשנה", "40px 'Calibri'", "#FFFFFF");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 49;
	this.text_4.lineWidth = 365;
	this.text_4.parent = this;
	this.text_4.setTransform(167.387,-172.5,0.3128,0.293);

	this.instance = new lib.Path_1();
	this.instance.setTransform(166.75,-89,0.3334,0.4203,0,0,0,234.8,246.5);

	this.text_5 = new cjs.Text("-אי אפשר בלעדיהן  ההוצאות הקבועות", "40px 'Calibri'", "#FFFFFF");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 49;
	this.text_5.lineWidth = 384;
	this.text_5.parent = this;
	this.text_5.setTransform(168.6728,-164.55,0.2678,0.2678);

	this.instance_1 = new lib.Path();
	this.instance_1.setTransform(171.25,-88.25,0.3525,0.4152,0,0,0,234.8,246.2);
	this.instance_1.shadow = new cjs.Shadow("rgba(58,53,53,0.498)",4,4,12);

	this.text_6 = new cjs.Text("חושבים יש המון דרכים ", "40px 'Calibri'");
	this.text_6.textAlign = "right";
	this.text_6.lineHeight = 51;
	this.text_6.lineWidth = 363;
	this.text_6.parent = this;
	this.text_6.setTransform(236.7948,-114.65,0.3942,0.3728);

	this.text_7 = new cjs.Text("לחצו על המטבע \nוגלו איך תוכלו לחסוך בהוצאות התקשורת", "bold 40px 'Calibri'", "#FFFFFF");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 51;
	this.text_7.lineWidth = 414;
	this.text_7.parent = this;
	this.text_7.setTransform(170.3028,-50.75,0.325,0.3229);

	this.text_8 = new cjs.Text("אנחנו משלמים על ", "40px 'Calibri'");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 51;
	this.text_8.lineWidth = 423;
	this.text_8.parent = this;
	this.text_8.setTransform(168.8045,-170.65,0.325,0.3229);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:166.75,y:-89}},{t:this.text_4,p:{scaleX:0.3128,scaleY:0.293,x:167.387,y:-172.5,text:"כמה אתם משלמים על ?מותרות בשנה",lineWidth:365,color:"#FFFFFF",lineHeight:48.85,textAlign:"center",font:"40px 'Calibri'"}},{t:this.text_3,p:{scaleX:0.293,scaleY:0.293,x:214.9198,y:-132.55,text:"-מכון כושר\n-רכב\n-בילויים",font:"40px 'Calibri'",textAlign:"right",lineHeight:48.85,lineWidth:156,color:"#FFFFFF"}},{t:this.text_2,p:{scaleX:0.293,scaleY:0.293,x:119.0265,y:-132.5419,text:"3,000 ₪\n16,560 ₪\n6,160 ₪",font:"bold 35px 'Calibri'",color:"#FFFFFF",textAlign:"",lineHeight:42.75,lineWidth:151}},{t:this.text_1,p:{scaleX:0.293,scaleY:0.293,x:167.3174,y:-81.2172,text:"וזו רק דוגמא קטנה להוצאות מהסוג הזה",textAlign:"center",lineWidth:393,color:"#FFFFFF",lineHeight:48.85,font:"40px 'Calibri'"}},{t:this.text,p:{scaleX:0.293,scaleY:0.293,x:167.3405,y:-50,text:"חצו על אחד המטבעות כדי לגלות איך תוכלו לחסוך ",font:"bold 40px 'Calibri'",color:"#DFB83A",textAlign:"center",lineWidth:437,lineHeight:48.85}}]}).to({state:[{t:this.instance,p:{x:170.9,y:-82.9}},{t:this.text_5,p:{scaleX:0.2678,scaleY:0.2678,x:168.6728,y:-164.55,text:"-אי אפשר בלעדיהן  ההוצאות הקבועות",font:"40px 'Calibri'",lineHeight:48.85,lineWidth:384,color:"#FFFFFF",textAlign:"center"}},{t:this.text_4,p:{scaleX:0.2678,scaleY:0.2678,x:168.6729,y:-128.05,text:"הוצאות תחזוקת הבית הן \n\n!החודשיות\nמים, חשמל, תקשורת ...וסלולר",lineWidth:416,color:"#FFFFFF",lineHeight:48.85,textAlign:"center",font:"40px 'Calibri'"}},{t:this.text_3,p:{scaleX:0.2678,scaleY:0.2678,x:181.4874,y:-113.8403,text:"51%",font:"bold 35px 'Calibri'",textAlign:"center",lineHeight:42.75,lineWidth:94,color:"#FFFFFF"}},{t:this.text_2,p:{scaleX:0.2678,scaleY:0.2678,x:168.6886,y:-56.4,text:"לחצו על אחד המטבעות כדי לגלות איך תוכלו לחסוך !בהוצאות תחזוקת הבית",font:"bold 40px 'Calibri'",color:"#DFB83A",textAlign:"center",lineHeight:48.85,lineWidth:415}},{t:this.text_1,p:{scaleX:0.2678,scaleY:0.2678,x:169.6347,y:-113.85,text:"מההוצאות ",textAlign:"right",lineWidth:175,color:"#FFFFFF",lineHeight:48.85,font:"40px 'Calibri'"}},{t:this.text,p:{scaleX:0.2678,scaleY:0.2678,x:206.6635,y:-114,text:"-כ ",font:"40px 'Calibri'",color:"#FFFFFF",textAlign:"right",lineWidth:55,lineHeight:48.85}}]},1).to({state:[{t:this.instance,p:{x:170.75,y:-83.1}},{t:this.text_4,p:{scaleX:0.2797,scaleY:0.2797,x:169.7763,y:-164.45,text:"בלי לשים לב ההוצאות השוטפות והיומיומיות מצטברות",lineWidth:384,color:"#FFFFFF",lineHeight:48.85,textAlign:"center",font:"40px 'Calibri'"}},{t:this.text_3,p:{scaleX:0.2797,scaleY:0.2797,x:223.3881,y:-104.45,text:"-הוצאות אלה הן כ",font:"40px 'Calibri'",textAlign:"right",lineHeight:48.85,lineWidth:319,color:"#FFFFFF"}},{t:this.text_2,p:{scaleX:0.2797,scaleY:0.2797,x:137.7073,y:-103.8282,text:"33%",font:"bold 35px 'Calibri'",color:"#FFFFFF",textAlign:"center",lineHeight:42.75,lineWidth:82}},{t:this.text_1,p:{scaleX:0.2797,scaleY:0.2797,x:169.7562,y:-61.5,text:"לחצו על אחד המטבעות כדי לגלות איך תוכלו לחסוך !בהוצאות השוטפות",textAlign:"center",lineWidth:383,color:"#DFB83A",lineHeight:48.85,font:"40px 'Calibri'"}},{t:this.text,p:{scaleX:0.2797,scaleY:0.2797,x:208.2796,y:-89.3,text:"מההוצאות שלנו ",font:"40px 'Calibri'",color:"#FFFFFF",textAlign:"right",lineWidth:276,lineHeight:48.85}}]},1).to({state:[{t:this.instance_1,p:{regX:234.8,regY:246.2,scaleX:0.3525,scaleY:0.4152,x:171.25,y:-88.25}},{t:this.text_3,p:{scaleX:0.3396,scaleY:0.3334,x:171.1693,y:-173.35,text:"חשבון החשמל שלנו הוא -לרוב סימן שאלה גדול\n ?על מה בעצם משלמים",font:"40px 'Calibri'",textAlign:"center",lineHeight:50.85,lineWidth:414,color:"#000000"}},{t:this.text_2,p:{scaleX:0.3396,scaleY:0.3334,x:171.1605,y:-117.65,text:"איך מקטינים את חשבון ?החשמל",font:"bold 40px 'Calibri'",color:"#000000",textAlign:"center",lineHeight:50.85,lineWidth:414}},{t:this.text_1,p:{scaleX:0.3396,scaleY:0.3334,x:171.1693,y:-72.95,text:"?האם יש דרכים לחסוך",textAlign:"center",lineWidth:414,color:"#000000",lineHeight:50.85,font:"40px 'Calibri'"}},{t:this.text,p:{scaleX:0.3396,scaleY:0.3334,x:171.1605,y:-41.35,text:"לחצו על המטבע וגלו איך תוכלו לחסוך בהוצאות .חשבון החשמל",font:"bold 40px 'Calibri'",color:"#FFFFFF",textAlign:"center",lineWidth:414,lineHeight:50.85}}]},1).to({state:[{t:this.instance_1,p:{regX:235,regY:246.3,scaleX:0.359,scaleY:0.4153,x:167.7,y:-89.25}},{t:this.text_4,p:{scaleX:0.3305,scaleY:0.3187,x:167.5278,y:-115.75,text:"עשיתם את הבחירה הכלכלית הנכונה בשבילכם ובחרתם לוותר על הרכב",lineWidth:414,color:"#000000",lineHeight:50.85,textAlign:"center",font:"40px 'Calibri'"}},{t:this.text_3,p:{scaleX:0.3305,scaleY:0.3187,x:167.5126,y:-173.05,text:"לשרוף קצת  זמן בהמתנה !אבל לחסוך בהוצאות",font:"bold 40px 'Calibri'",textAlign:"center",lineHeight:50.85,lineWidth:414,color:"#000000"}},{t:this.text_2,p:{scaleX:0.3305,scaleY:0.3187,x:167.5126,y:-46.05,text:"לחצו על המטבע  וגלו     ",font:"bold 40px 'Calibri'",color:"#FFFFFF",textAlign:"center",lineHeight:50.85,lineWidth:414}},{t:this.text_1,p:{scaleX:0.3305,scaleY:0.3187,x:167.5126,y:-15.85,text:"בהוצאות הנסיעה",textAlign:"center",lineWidth:414,color:"#FFFFFF",lineHeight:50.85,font:"bold 40px 'Calibri'"}},{t:this.text,p:{scaleX:0.3305,scaleY:0.3187,x:167.5126,y:-32.75,text:"איך תוכלו לחסוך  ",font:"bold 40px 'Calibri'",color:"#FFFFFF",textAlign:"center",lineWidth:414,lineHeight:50.85}}]},1).to({state:[{t:this.instance_1,p:{regX:235.6,regY:246.3,scaleX:0.3646,scaleY:0.4209,x:168.6,y:-86.5}},{t:this.text_1,p:{scaleX:0.329,scaleY:0.3166,x:168.2971,y:-182.45,text:"\nאז על מה הכסף שלנו :נוזל\nשירותים – 35% \nמקלחת – 40% \nשתייה, בישול והדחת כלים  20% -\nכביסה וניקיון – 5% ",textAlign:"center",lineWidth:414,color:"#000000",lineHeight:50.85,font:"40px 'Calibri'"}},{t:this.text,p:{scaleX:0.329,scaleY:0.3166,x:168.2509,y:-47.25,text:"לחצו על המטבע וגלו איך תוכלו לחסוך בהוצאות המים",font:"bold 40px 'Calibri'",color:"#FFFFFF",textAlign:"center",lineWidth:414,lineHeight:50.85}}]},1).to({state:[{t:this.instance_1,p:{regX:235.4,regY:246.3,scaleX:0.3692,scaleY:0.4263,x:167.45,y:-83.05}},{t:this.text_2,p:{scaleX:0.3706,scaleY:0.3566,x:165.8216,y:-165.5,text:"דרך טובה לחיסכון היא לנסות !לעשות דברים בעצמך",font:"40px 'Calibri'",color:"#000000",textAlign:"center",lineHeight:50.85,lineWidth:436}},{t:this.text_1,p:{scaleX:0.3706,scaleY:0.3566,x:167.0828,y:-36.9,text:"לחצו על המטבע וגלו איך תוכלו לחסוך מלעשות דברים לבד",textAlign:"center",lineWidth:414,color:"#FFFFFF",lineHeight:50.85,font:"bold 40px 'Calibri'"}},{t:this.text,p:{scaleX:0.3706,scaleY:0.3566,x:167.1684,y:-111.5,text:"במקום למהר להזמין איש מקצוע או לרכוש את המוצר הראשון שמוכר מציע יש אפשרות זולה יותר",font:"35px 'Calibri'",color:"#000000",textAlign:"center",lineWidth:414,lineHeight:44.75}}]},1).to({state:[{t:this.instance_1,p:{regX:235,regY:246.2,scaleX:0.3681,scaleY:0.4175,x:167.1,y:-82.35}},{t:this.text_6,p:{scaleX:0.3942,scaleY:0.3728,x:236.7948,y:-114.65,text:"חושבים יש המון דרכים ",font:"40px 'Calibri'",lineWidth:363}},{t:this.text_5,p:{scaleX:0.3942,scaleY:0.3728,x:166.4618,y:-51.25,text:"לחצו על המטבע וגלו איך תוכלו לחסוך בהוצאות .הרכב",font:"bold 40px 'Calibri'",lineHeight:50.85,lineWidth:411,color:"#FFFFFF",textAlign:"center"}},{t:this.text_4,p:{scaleX:0.3942,scaleY:0.3728,x:237.3928,y:-168.35,text:"רכב זה ללא ספק ",lineWidth:279,color:"#000000",lineHeight:50.85,textAlign:"right",font:"40px 'Calibri'"}},{t:this.text_3,p:{scaleX:0.3942,scaleY:0.3728,x:135.3255,y:-167.75,text:"עסק",font:"bold 40px 'Calibri'",textAlign:"right",lineHeight:50.85,lineWidth:101,color:"#000000"}},{t:this.text_2,p:{scaleX:0.3942,scaleY:0.3728,x:237.5729,y:-141.5,text:"יקר",font:"bold 40px 'Calibri'",color:"#000000",textAlign:"right",lineHeight:50.85,lineWidth:74}},{t:this.text_1,p:{scaleX:0.3942,scaleY:0.3728,x:213.2848,y:-141.5,text:"ובניגוד למה שאתם",textAlign:"right",lineWidth:311,color:"#000000",lineHeight:50.85,font:"40px 'Calibri'"}},{t:this.text,p:{scaleX:0.3942,scaleY:0.3728,x:236.1861,y:-89,text:".לחסוך בהוצאות עליו",font:"bold 40px 'Calibri'",color:"#000000",textAlign:"right",lineWidth:367,lineHeight:50.85}}]},1).to({state:[{t:this.instance_1,p:{regX:235.1,regY:246.1,scaleX:0.3667,scaleY:0.4156,x:167.85,y:-81.65}},{t:this.text_2,p:{scaleX:0.3337,scaleY:0.3153,x:167.6335,y:-110.2,text:",אפשר לעשות הכל – טיסה שופינג, מסעדות, זאת רק שאלה !של איך",font:"35px 'Calibri'",color:"#000000",textAlign:"center",lineHeight:44.75,lineWidth:423}},{t:this.text_1,p:{scaleX:0.3337,scaleY:0.3153,x:167.6591,y:-43.75,text:"לחצו על המטבע וגלו איך תוכלו גם להנות וגם לחסוך בהוצאות הבילוי",textAlign:"center",lineWidth:414,color:"#FFFFFF",lineHeight:50.85,font:"bold 40px 'Calibri'"}},{t:this.text,p:{scaleX:0.3337,scaleY:0.3153,x:167.6526,y:-167.2,text:"מצאנו דרך לשמור על !השפיות וגם על הארנק",font:"bold 40px 'Calibri'",color:"#000000",textAlign:"center",lineWidth:416,lineHeight:50.85}}]},1).to({state:[{t:this.instance_1,p:{regX:234.9,regY:246.3,scaleX:0.3603,scaleY:0.4296,x:167.25,y:-83.8}},{t:this.text_8},{t:this.text_7},{t:this.text_6,p:{scaleX:0.325,scaleY:0.3229,x:238.1209,y:-154.2,text:"אינטרנט, טלוויזיה, טלפון ",font:"bold 40px 'Calibri'",lineWidth:427}},{t:this.text_5,p:{scaleX:0.325,scaleY:0.3229,x:233.5693,y:-137.6,text:".קווי וטלפון נייד ",font:"bold 40px 'Calibri'",lineHeight:50.85,lineWidth:265,color:"#000000",textAlign:"right"}},{t:this.text_4,p:{scaleX:0.325,scaleY:0.3229,x:154.7507,y:-135.85,text:"אם עושים ",lineWidth:166,color:"#000000",lineHeight:50.85,textAlign:"right",font:"40px 'Calibri'"}},{t:this.text_3,p:{scaleX:0.325,scaleY:0.3229,x:163.2045,y:-119.95,text:"חישוב של כל ההוצאות ",font:"40px 'Calibri'",textAlign:"center",lineHeight:50.85,lineWidth:423,color:"#000000"}},{t:this.text_2,p:{scaleX:0.325,scaleY:0.3229,x:236.8887,y:-104.05,text:"ביחד, מדובר על ",font:"40px 'Calibri'",color:"#000000",textAlign:"right",lineHeight:50.85,lineWidth:278}},{t:this.text_1,p:{scaleX:0.325,scaleY:0.3229,x:160.276,y:-104.1,text:"סכום כסף ",textAlign:"right",lineWidth:171,color:"#000000",lineHeight:50.85,font:"bold 40px 'Calibri'"}},{t:this.text,p:{scaleX:0.325,scaleY:0.3229,x:189.5584,y:-83.6,text:".לא קטן",font:"bold 40px 'Calibri'",color:"#000000",textAlign:"right",lineWidth:145,lineHeight:50.85}}]},1).to({state:[{t:this.instance_1,p:{regX:235,regY:246,scaleX:0.368,scaleY:0.4258,x:164.95,y:-85.45}},{t:this.text_2,p:{scaleX:0.3349,scaleY:0.323,x:164.8044,y:-168.45,text:"כולנו שמענו על יוקר המחיה ועל כך שהמחירים ,בסופר רק .עולים למעשה, אחרי דיור",font:"40px 'Calibri'",color:"#000000",textAlign:"center",lineHeight:50.85,lineWidth:423}},{t:this.text_1,p:{scaleX:0.3349,scaleY:0.323,x:164.8218,y:-51.5,text:"לחצו על המטבע וגלו איך תוכלו לחסוך בסל הקניות",textAlign:"center",lineWidth:414,color:"#FFFFFF",lineHeight:50.85,font:"bold 40px 'Calibri'"}},{t:this.text,p:{scaleX:0.3349,scaleY:0.323,x:164.7817,y:-99.45,text:"מזון הוא הוצאה הכי גדולה שיש למשפחה ישראלית",font:"bold 40px 'Calibri'",color:"#000000",textAlign:"center",lineWidth:427,lineHeight:50.85}}]},1).to({state:[{t:this.instance_1,p:{regX:235.5,regY:246.1,scaleX:0.362,scaleY:0.4349,x:164.6,y:-85.05}},{t:this.text_6,p:{scaleX:0.3293,scaleY:0.3298,x:160.4257,y:-164.8507,text:"שמצטבר",font:"40px 'Calibri'",lineWidth:169}},{t:this.text_5,p:{scaleX:0.3293,scaleY:0.3298,x:162.6523,y:-69.85,text:"לחצו על המטבע וגלו איך תוכלו לחסוך בהוצאות בעזרת הכסף הקטן",font:"bold 40px 'Calibri'",lineHeight:50.85,lineWidth:414,color:"#FFFFFF",textAlign:"center"}},{t:this.text_4,p:{scaleX:0.3293,scaleY:0.3298,x:197.9295,y:-164.85,text:"לכסף הקטן ",lineWidth:199,color:"#000000",lineHeight:50.85,textAlign:"center",font:"bold 40px 'Calibri'"}},{t:this.text_3,p:{scaleX:0.3293,scaleY:0.3298,x:175.7688,y:-147.0007,text:"בכיסים יכולים להיות",font:"40px 'Calibri'",textAlign:"center",lineHeight:50.85,lineWidth:334,color:"#000000"}},{t:this.text_2,p:{scaleX:0.3293,scaleY:0.3298,x:230.7688,y:-127.7507,text:"מספר שימושים",font:"40px 'Calibri'",color:"#000000",textAlign:"right",lineHeight:50.85,lineWidth:393}},{t:this.text_1,p:{scaleX:0.3293,scaleY:0.3298,x:132.924,y:-127.35,text:"שיחסכו",textAlign:"center",lineWidth:152,color:"#000000",lineHeight:50.85,font:"bold 40px 'Calibri'"}},{t:this.text,p:{scaleX:0.3293,scaleY:0.3298,x:169.224,y:-108.4,text:"!בגדול",font:"bold 40px 'Calibri'",color:"#000000",textAlign:"center",lineWidth:152,lineHeight:50.85}}]},1).to({state:[{t:this.instance_1,p:{regX:235.3,regY:246.2,scaleX:0.3726,scaleY:0.4313,x:164.7,y:-85.1}},{t:this.text_2,p:{scaleX:0.359,scaleY:0.3464,x:164.4764,y:-45.85,text:"לחצו על המטבע וגלו איך תוכלו לחסוך בהוצאות בעזרת הכסף הקטן",font:"bold 40px 'Calibri'",color:"#FFFFFF",textAlign:"center",lineHeight:50.85,lineWidth:414}},{t:this.text_1,p:{scaleX:0.359,scaleY:0.3464,x:164.479,y:-171.0921,text:"מותרות והנאות הן ,בהחלט לא מילים גסות אבל גם את זה צריך לדעת איך לעשות",textAlign:"center",lineWidth:393,color:"#000000",lineHeight:50.85,font:"40px 'Calibri'"}},{t:this.text,p:{scaleX:0.359,scaleY:0.3464,x:164.3784,y:-91.7,text:"!מנויים הם בהחלט פתרון",font:"bold 40px 'Calibri'",color:"#000000",textAlign:"center",lineWidth:388,lineHeight:50.85}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(71.1,-197.5,201.29999999999998,236.4);


(lib.about_us2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_1
	this.text = new cjs.Text("אודות", "bold 24px 'Calibri'", "#E6E5E5");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 120;
	this.text.parent = this;
	this.text.setTransform(1.5,-14.75);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD9E9E").s().p("Ar4D6QghAAgXgXQgXgYgBghIAAlTQABghAXgYQAXgXAhAAIXxAAQAhAAAXAXQAXAYAAAhIAAFTQAAAhgXAYQgXAXghAAg");
	this.shape.setTransform(0.55,0);

	this.instance = new lib.adi();
	this.instance.setTransform(274,146,0.3633,0.3632);

	this.instance_1 = new lib.inbal();
	this.instance_1.setTransform(351,146,0.3633,0.3631);

	this.instance_2 = new lib.rotem();
	this.instance_2.setTransform(196,146,0.3632,0.3632);

	this.instance_3 = new lib.limor();
	this.instance_3.setTransform(428,146,0.3634,0.3632);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAkIgKgBIgFgCQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIgJg9QAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIACgBIAFgBIAIABQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIAEAaQAHABADgCQAEgBABgFQACgEAAgJIAAgGQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAIAGgBIAGABQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIAAAGQAAANgDAHQgDAHgGADQgHADgMgBIADARIANABQALAAAIgFQAHgFAEgLQAEgKAAgRIAAgIQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAIAHgBIAGABQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAIAAAIQAAAVgGANQgGAOgLAHQgMAHgRAAIgMgBg");
	this.shape_1.setTransform(356.4167,116.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRAkIgBgBIgBgGIABgGIABgBIAUAAIAAgbIgBgLQAAgCgCgCIgGgBIgJABIgBgCIAAgFIAAgFQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAAAIALgBQAIAAAEACQAFABADADQADADAAAFIABAPIAAAlIgBAEQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_2.setTransform(348.6,116.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAQAjQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgjIgBgKQgBgEgCgCQgCgBgEgBIgIgBIgYAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAIgBgGIABgFQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAZAAQAJAAAHACQAHABAEAEQAEADACAGQACAGAAAKIAAAkQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAIgHABIgHgBgAgcAjQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgkQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAHgBIAHABQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAAAIAAAkQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAIgHABIgHgBg");
	this.shape_3.setTransform(342.375,116.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATAkIgEgBIgCgCIgWghIgDAGIgBAFIgBAJIAAANQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAABIgHAAIgHAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgNIABgNQABgFADgEQACgFAFgGIgLgPIgBgDIgBgCQAAAAAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAHAAIAHAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABIATAbIAEgFIACgFIABgHIAAgKQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAGgBIAHABQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIAAAJIgBAKIgCAHIgEAGIgIAIIAPAVIACADIAAACQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgGAAIgGAAg");
	this.shape_4.setTransform(331.525,116.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAASIgCAAIgCgBIgBgBIAAgBIgCgdIABgBIABgBIACgBIADAAIAEAAIACABIACABIAAABIgBAdIgBABIgBABIgCABIgDAAg");
	this.shape_5.setTransform(326.1,112.825);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAwQAAgBAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAg7QAAgBABAAQAAgBAAAAQAAAAABAAQAAAAAAgBIAHAAIAHAAQAAABABAAQAAAAAAAAQABAAAAABQAAAAAAABIAAA7QAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABIgHAAIgHAAgAACAYIgCgCIABgEIAJgUIADgLIABgJIgBgHQgBgCgDgBIgJgBIgdAAQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBIgBgFIABgGQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAAAAAIAeAAQAMAAAGACQAHADAEAFQACAFAAAIIgBAMIgEAMIgJAVQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABIgHAAIgGAAg");
	this.shape_6.setTransform(445.15,100.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGAkQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAAAgBIAAhBQAAgBAAAAQABAAAAgBQAAAAAAAAQABAAAAAAIAGgBIAHABQAAAAABAAQAAAAAAAAQAAABABAAQAAAAAAABIAABBQAAABAAAAQgBAAAAABQAAAAAAAAQgBABAAAAIgHAAIgGAAg");
	this.shape_7.setTransform(439.425,98.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AALAkQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAgmIgBgJQAAgDgCgBIgEgCIgIgBIgRABQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAgBIAAgFIAAgGQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAIASgBQAJAAAGABQAGACADADQAEADACAGQABAFAAAJIAAAnQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAIgHAAIgGAAg");
	this.shape_8.setTransform(434.275,98.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAgQgHgDgEgIQgDgIAAgMQgBgMAHgLIgJAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBgBAAIAAgGIAAgFQABAAAAgBQAAAAAAAAQAAAAABAAQAAgBABAAIAgAAQANAAAJAEQAIAEAEAHQAEAHAAANQAAALgEAJQgFAIgHAFQgIAFgLAAQgKgBgIgEgAgMAAQgBAIACAFQACAEAEADQADACAFABQAEgBAFgCQADgDACgFQACgGAAgGQAAgIgCgFQgDgFgEgCQgEgCgIAAIgEAAQgHAKABAMg");
	this.shape_9.setTransform(427.4,99);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AggAkQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAIAIgrIAAgEIgCgFIgEgKIgBgEQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIACgBIAGgBIAHABQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIADAIQAGgGAGgDQAFgDAGAAQAIAAAFAEQAGAEACAIQADAHAAANIgBAPIgBAQQAAABAAAAQAAABgBABQAAAAAAAAQAAABgBAAIgDABIgdAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIAAgGIAAgFIACgCIARAAIABgWIgBgMQgBgFgCgCQgCgCgEAAQgEAAgDACIgJAIIgIAtQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgHABIgGgBg");
	this.shape_10.setTransform(416.17,98.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdAkIgCgCIgBgFIABgFQAAAAABgBQAAAAAAgBQAAAAAAAAQAAAAABAAIAiAAQgCgKAAgIIAAgHIgBgKQAAgBAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAIgDgDIgIAAIgIAAIgHABQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIgBgGIABgFQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIAIgCIAHAAQAKAAAFACQAGACAEACQADAEACAFQABAGAAALIAAAHQAAAIACAKIAIAAIACACIABAFIgBAFQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape_11.setTransform(408.875,98.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGAkQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAAAgBIAAhBQAAgBAAAAQABAAAAgBQAAAAAAAAQABAAAAAAIAGgBIAHABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAABBQAAABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAIgHAAIgGAAg");
	this.shape_12.setTransform(403.675,98.925);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AATAkIgEgBIgCgCIgWghIgDAGIgBAFIgBAJIAAANQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAIgHAAIgHAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAAAgBIAAgNIABgNQABgFADgEQACgFAFgGIgLgPIgBgDIgBgCQAAAAAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAHAAIAHAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABIATAbIAEgFIACgFIABgHIAAgKQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAGgBIAHABQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAAJIgBAKIgCAHIgEAGIgIAIIAPAVIACADIAAACQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgGAAIgGAAg");
	this.shape_13.setTransform(398.175,98.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgKAvQAAgBgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIABgEIANgYIAGgNIABgHIgBgEIgEgCIgGgBIgUAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgBgDIAAgcQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAHgBIAGABQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIAAATIAJAAQAIAAAEABQAFACAEACQADACACAEQABADAAAGQAAAEgCAFQgBAHgFAHIgNAZIgDADIgHAAIgGAAg");
	this.shape_14.setTransform(388.1,97.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAVAkQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIAAgjQAAgIgBgEQgCgEgEgBQgEgCgHAAIgHAAIAAAhQAAAIgCAGQgDAEgEADQgFACgIABIgFAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAgBAAAAIgBgGIABgEQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAIAFAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBIABgGIAAgiIgJAAIgCgCIgBgFIABgGIACgBIAjAAQANAAAIADQAHADADAGQAEAHAAAMIAAAlQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAABIgHAAIgHAAg");
	this.shape_15.setTransform(380.725,98.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgZAkIgBgCIgBgFIABgFQAAAAAAgBQAAAAABgBQAAAAAAAAQAAAAAAAAIAiAAIABgWQAAgJgBgFQgBgEgEgCQgDgBgIAAIgPABIgCgBIAAgGIAAgFIADgCIAPgBQANAAAIADQAGADAEAHQACAHAAAOQAAAMgBAUQgBABAAAAQAAABAAAAQAAABAAAAQgBABAAAAIgEABg");
	this.shape_16.setTransform(373.2,98.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRAkIgCgCIgBgFIABgGIACgBIAUAAIAAgaIAAgLQgBgEgCgBIgGgBIgJABIgBgBIAAgGIAAgFQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAKgBQAIAAAEACQAFABACADQAEADABAFIABAPIAAAlIgBADQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape_17.setTransform(367.3,98.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgGAkQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAhBQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAGgBIAHABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAABBQAAABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAIgHAAIgGAAg");
	this.shape_18.setTransform(363.325,98.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAVAkQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIAAgjQAAgIgBgEQgCgEgEgBQgEgCgHAAIgHAAIAAAhQAAAIgCAGQgDAEgEADQgFACgIABIgFAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAgBAAAAIgBgGIABgEQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAIAFAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBIABgGIAAgiIgJAAIgCgCIgBgFIABgGIACgBIAjAAQANAAAIADQAHADADAGQAEAHAAAMIAAAlQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAABIgHAAIgHAAg");
	this.shape_19.setTransform(357.075,98.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AATAkIgEgBIgCgCIgWghIgDAGIgBAFIgBAJIAAANQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAIgHAAIgHAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAAAgBIAAgNIABgNQABgFADgEQACgFAFgGIgLgPIgBgDIgBgCQAAAAAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAHAAIAHAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABIATAbIAEgFIACgFIABgHIAAgKQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAABAAIAGgBIAHABQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIAAAJIgBAKIgCAHIgEAGIgIAIIAPAVIACADIAAACQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABgBAAIgGAAIgGAAg");
	this.shape_20.setTransform(346.225,98.925);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgGAVQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIAAglQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAAAIAGgBIAHABQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAAlQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgHABIgGgBg");
	this.shape_21.setTransform(340.675,97.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgRAkIgBgCIgBgFIABgGIABgBIAUAAIAAgaIgBgLQAAgEgCgBIgGgBIgJABIgBgBIAAgGIAAgFQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIALgBQAIAAAEACQAFABADADQADADAAAFIABAPIAAAlIgBADQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_22.setTransform(336.1,98.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgWAkIgEgCQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgFg8QgBgBAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIAHgBQAGAAABABQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABIAFA2IAFABQAGAAAFgEQAFgDACgHQADgHAAgKIAAAAIgBgIQgBgDgCgBQgCgBgEAAIgFAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAgFIAAgFQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIAGAAQAKAAAGADQAFACADAGQADAGAAAJIAAAAQAAANgFALQgFAKgKAGQgJAGgMAAIgPgBg");
	this.shape_23.setTransform(329.995,98.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AALAkQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgmIgBgJQAAgDgCgBIgEgCIgIgBIgRABQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAgBIAAgFIAAgGQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAIASgBQAJAAAGABQAGACADADQAEADACAGQABAFAAAJIAAAnQAAABAAAAQAAAAAAABQAAAAgBAAQAAABgBAAIgHAAIgGAAg");
	this.shape_24.setTransform(322.625,98.925);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AATAkIgEgBIgCgCIgWghIgDAGIgBAFIgBAJIAAANQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAIgHAAIgHAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgNIABgNQABgFADgEQACgFAFgGIgLgPIgBgDIgBgCQAAAAAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAHAAIAHAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABIATAbIAEgFIACgFIABgHIAAgKQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAGgBIAHABQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIAAAJIgBAKIgCAHIgEAGIgIAIIAPAVIACADIAAACQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgGAAIgGAAg");
	this.shape_25.setTransform(316.125,98.925);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgdAwQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAg7QAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAgBIAHAAIAHAAQAAABABAAQAAAAAAAAQABAAAAABQAAAAAAABIAAA7QAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABIgHAAIgHAAgAACAYIgCgCIAAgEIAKgUIAEgLIAAgJIAAgHQgCgCgEgBIgIgBIgdAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgFIAAgGQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAeAAQAMAAAGACQAHADAEAFQACAFABAIIgCAMIgFAMIgIAVQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBABIgHAAIgGAAg");
	this.shape_26.setTransform(308.6,100.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgbAkIgBgCIgBgFIABgFQAAAAAAgBQAAAAABgBQAAAAAAAAQAAAAAAAAIAiAAIgkgzIgBgDQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIAHgBIAIABIADACIARAbIABgCIAEgEIACgFIAAgGIAAgKQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIAHgBIAHABQAAAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAAJIAAAMIgEAIIgIAIIgCABIAKAQIADACIAAADIAAAEIAAADQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_27.setTransform(300.85,98.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgGAVQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAglQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAGgBIAHABQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAAlQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgHABIgGgBg");
	this.shape_28.setTransform(295.925,97.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAQAkQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIAAgjIgBgKQgBgDgCgCQgCgCgEgBIgIgBIgYAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIgBgFIABgGQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAZAAQAJAAAHACQAHACAEADQAEADACAGQACAGAAAJIAAAlQAAAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABIgHAAIgHAAgAgcAkQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIAAgjQAAgBAAAAQABgBAAAAQAAAAAAAAQABAAAAgBIAHAAIAHAAQAAABABAAQAAAAAAAAQABAAAAABQAAAAAAABIAAAjQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABIgHAAIgHAAg");
	this.shape_29.setTransform(290.225,98.95);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgGAkQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAhBQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAGgBIAHABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIAABBQAAABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAIgHAAIgGAAg");
	this.shape_30.setTransform(281.425,98.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AATAkIgEgBIgCgCIgWghIgDAGIgBAFIgBAJIAAANQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAIgHAAIgHAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgNIABgNQABgFADgEQACgFAFgGIgLgPIgBgDIgBgCQAAAAAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAHAAIAHAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABIATAbIAEgFIACgFIABgHIAAgKQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAGgBIAHABQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIAAAJIgBAKIgCAHIgEAGIgIAIIAPAVIACADIAAACQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgGAAIgGAAg");
	this.shape_31.setTransform(275.975,98.925);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgRAkIgCgCIAAgFIAAgGIACgBIAVAAIAAgaIgCgLQAAgEgCgBIgGgBIgJABIgCgBIAAgGIAAgFQABgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAMgBQAGAAAFACQAFABADADQACADABAFIABAPIAAAlIgBADQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_32.setTransform(269.25,98.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgGAVQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIAAglQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAAAIAGgBIAHABQAAAAABAAQAAAAAAABQAAAAABAAQAAABAAAAIAAAlQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAIgHABIgGgBg");
	this.shape_33.setTransform(265.275,97.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AggAkQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAIAIgrIAAgEIgCgFIgEgKIgBgEQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIACgBIAGgBIAHABQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIADAIQAGgGAGgDQAFgDAGAAQAIAAAFAEQAGAEACAIQADAHAAANIgBAPIgBAQQAAABAAAAQAAABgBABQAAAAAAAAQAAABgBAAIgDABIgdAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIAAgGIAAgFIACgCIARAAIABgWIgBgMQgBgFgCgCQgCgCgEAAQgEAAgDACIgJAIIgIAtQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgHABIgGgBg");
	this.shape_34.setTransform(259.37,98.875);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgbAkIgBgCIAAgFIAAgFQAAAAAAgBQAAAAABgBQAAAAAAAAQAAAAAAAAIAiAAIgjgzIgCgDQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAHgBIAIABIADACIARAbIABgCIAEgEIACgFIAAgGIAAgKQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIAHgBIAGABQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAAJIAAAMIgEAIIgIAIIgCABIAKAQIACACIABADIAAAEIgBADQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_35.setTransform(251.7,98.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgGAVQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAglQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAGgBIAHABQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAAlQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgHABIgGgBg");
	this.shape_36.setTransform(246.775,97.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAQAkQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIAAgjIgBgKQgBgDgCgCQgCgCgEgBIgIgBIgYAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIgBgFIABgGQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAZAAQAJAAAHACQAHACAEADQAEADACAGQACAGAAAJIAAAlQAAAAAAABQgBAAAAABQAAAAAAAAQgBAAAAABIgHAAIgHAAgAgcAkQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIAAgjQAAgBAAAAQABgBAAAAQAAAAAAAAQABAAAAgBIAHAAIAHAAQAAABABAAQAAAAAAAAQAAAAABABQAAAAAAABIAAAjQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAABIgHAAIgHAAg");
	this.shape_37.setTransform(241.025,98.95);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgdAkIgCgBIgBgGIABgFQAAgBABAAQAAAAAAAAQAAgBAAAAQAAAAABAAIAiAAQgCgKAAgJIAAgFIgBgMQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBgBAAIgDgCIgIgBIgIAAIgHABQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIgBgFIABgFQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBABAAIAIAAIAHgBQAKAAAFABQAGACAEAEQADADACAGQABAFAAAKIAAAHQAAAJACAKIAIAAIACACIABAFIgBAGQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape_38.setTransform(394.825,80.95);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgdAvQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAg8QAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAIAHgBIAHABQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAA8QAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgHABIgHgBgAACAXIgCgBIABgDIAJgWIADgLIABgJIgBgFQgBgDgDgBIgJgBIgdAAQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAAAAAAAIgBgGIABgFQAAgBAAAAQABAAAAgBQAAAAAAAAQABAAAAAAIAeAAQAMAAAGADQAHACAEAFQACAFAAAIIgBALIgEANIgJAVQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgHABIgGgBg");
	this.shape_39.setTransform(387.65,82.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgGAkQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBIAAhBQAAgBAAAAQABAAAAAAQAAgBAAAAQABAAAAAAIAGgBIAHABQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIAABBQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAABIgHAAIgGAAg");
	this.shape_40.setTransform(381.925,80.975);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AALAkQgBgBAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIAAgmIgBgJQAAgDgCgBIgEgCIgIgBIgRABQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAgBIAAgFIAAgGQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAIASgBQAJAAAGABQAGACADADQAEADACAGQABAFAAAJIAAAnQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBABIgHAAIgGAAg");
	this.shape_41.setTransform(376.775,80.975);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgQAhQgHgFgEgHQgDgIAAgMQgBgMAHgKIgJAAQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAgBgBAAIAAgFIAAgGQABAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAIAgAAQAMAAAKADQAIAEAEAHQAEAIAAAMQAAALgEAJQgFAIgHAFQgIAEgLAAQgKAAgIgDgAgNAAQABAHABAFQACAGAEACQADADAFAAQAEAAAFgDQADgDACgFQACgGAAgGQAAgIgCgFQgDgEgEgCQgEgCgIAAIgEAAQgHAJAAAMg");
	this.shape_42.setTransform(369.9,81.05);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AATAkIgEgBIgCgCIgWghIgDAGIgBAFIgBAJIAAANQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAABIgHAAIgHAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgNIABgNQABgFADgEQACgFAFgGIgLgPIgBgDIgBgCQAAAAAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIAHAAIAHAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABABIATAbIAEgFIACgFIABgHIAAgKQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIAGgBIAHABQABAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIAAAJIgBAKIgCAHIgEAGIgIAIIAPAVIACADIAAACQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgGAAIgGAAg");
	this.shape_43.setTransform(359.125,80.975);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AALAkQgBgBAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgmIgBgJQAAgDgCgBIgEgCIgIgBIgRABQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAgBIAAgFIAAgGQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAIASgBQAJAAAGABQAGACADADQAEADACAGQABAFAAAJIAAAnQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBABIgHAAIgGAAg");
	this.shape_44.setTransform(351.875,80.975);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgWAjIgBgHQAAgFABgCQAAAAABAAQAAgBAAAAQABgBAAAAQABAAAAgBIAVgNIgCgPIgCgIIgCgDIgGgBIgGAAIgCgCIAAgEIAAgGIACgBIAIAAQAIAAAEACQAFACADAFQADAEABAJIAHAqIAAAFIgCABIgGAAIgGAAIgCgBIgBgCIgCgMIgUAPIgEABQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_45.setTransform(346.4625,81.05);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgGAkQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBIAAhBQAAgBAAAAQABAAAAAAQAAgBAAAAQABAAAAAAIAGgBIAHABQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIAABBQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAABIgHAAIgGAAg");
	this.shape_46.setTransform(342.225,80.975);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgGAwQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAhZQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIAGgBIAHABQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAABZQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAABIgHAAIgGAAg");
	this.shape_47.setTransform(338.775,82.175);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgGAkQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAAAgBIAAhBQAAgBAAAAQABAAAAAAQAAgBAAAAQABAAAAAAIAGgBIAHABQAAAAABAAQAAAAAAABQAAAAABAAQAAAAAAABIAABBQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAABIgHAAIgGAAg");
	this.shape_48.setTransform(332.225,80.975);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgGAVQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAAglQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAIAGgBIAHABQAAAAABAAQAAABAAAAQABAAAAAAQAAABAAAAIAAAlQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIgHABIgGgBg");
	this.shape_49.setTransform(328.775,79.55);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgGAVQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAAglQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAIAGgBIAHABQAAAAABAAQAAABAAAAQAAAAABAAQAAABAAAAIAAAlQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAIgHABIgGgBg");
	this.shape_50.setTransform(325.325,79.55);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgbAkIgBgBIgBgGIABgFQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAIAiAAIgkgyIgBgEQAAAAAAgBQAAAAAAAAQABAAAAgBQABAAAAAAIAHgBIAIABIADACIARAaIABgBIAEgEIACgFIAAgHIAAgJQAAAAAAgBQAAAAAAAAQABAAAAgBQABAAAAAAIAHgBIAHABQAAAAAAAAQAAABABAAQAAAAAAAAQAAABAAAAIAAAJIAAAMIgEAHIgHAIIgDADIAKAOIADAEIAAACIAAADIAAAFQgBAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAg");
	this.shape_51.setTransform(319.85,80.95);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgGAkQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAhBQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIAGgBIAHABQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAABBQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAABIgHAAIgGAAg");
	this.shape_52.setTransform(314.925,80.975);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgWAjIgBgHQAAgFABgCQAAAAABAAQAAgBAAAAQABgBAAAAQABAAAAgBIAVgNIgCgPIgCgIIgCgDIgGgBIgGAAIgCgCIAAgEIAAgGIACgBIAIAAQAIAAAEACQAFACADAFQADAEABAJIAHAqIAAAFIgCABIgGAAIgGAAIgCgBIgBgCIgCgMIgUAPIgEABQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_53.setTransform(310.5125,81.05);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgGAVQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAAglQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAIAGgBIAHABQAAAAABAAQAAABAAAAQABAAAAAAQAAABAAAAIAAAlQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIgHABIgGgBg");
	this.shape_54.setTransform(303.125,79.55);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AACAjQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgjQAAgJACgKIgdAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIgBgFIABgFQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIA1AAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIABAFIgBAFQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgHAAQgCAKAAAJIAAAjQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgHABIgHgBg");
	this.shape_55.setTransform(298.3,81);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgeAkIgCgBIgBgGIABgFQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIANAAIgLg1IAAgDIACAAIAGgBIAIABQAAAAAAAAQABAAAAAAQAAABAAAAQAAABABAAIAKA1QAFAAADgDQADgCACgFIADgNIAAgYIAAgHQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAAAAAIAHgBIAHABQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIAAAGQAAAVgCAKQgDAMgEAHQgEAHgIADQgIADgNAAg");
	this.shape_56.setTransform(291.2,80.95);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgcAkIgBgCIgBgFIABgFQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIApAAIABgXQAAgJgCgEQgBgEgDgBQgEgCgGAAIgLAAIgBAGIAAAFIACADIAFADIACABIABACIgBACIgBADIgDAFIgCABIgCgBIgEgBQgGgDgDgDQgDgDAAgEQgBgEAAgHIACgOQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAABAAIAWAAQAJAAAGACQAHACADADQAEAEACAGQABAGAAALIAAAOIgCASIgCAEIgDABg");
	this.shape_57.setTransform(406.1917,62.975);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgcAvQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAg8QAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIAGgBIAHABQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAA8QAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAIgHABIgGgBgAABAXIgBgBIAAgDIAKgWIAEgLIABgJIgBgFQgCgDgDgBIgJgBIgdAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAIgBgGIABgFQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAeAAQAMAAAGADQAHACADAFQAEAFAAAIIgCALIgFANIgIAVQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIgHABIgHgBg");
	this.shape_58.setTransform(398.75,64.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgGAkQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAhBQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIAGgBIAHABQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAABBQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAABIgHAAIgGAAg");
	this.shape_59.setTransform(393.025,62.975);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgKAuQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIABgCIAMgZIAGgMIACgHIgBgFIgDgDIgHAAIgTAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgBgEIAAgdQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAgBIAGAAIAIAAQAAABAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAAUIAJAAQAHAAAGACQAFAAADADQADACABAEQACADAAAGQAAAEgCAGQgCAFgEAIIgNAZIgDACIgHABIgGgBg");
	this.shape_60.setTransform(388.15,61.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgWAkIgEgCQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgFg8QgBgBAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIAHgBQAGAAABABQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABIAFA2IAFABQAGAAAFgEQAFgDACgHQADgHAAgKIAAAAIgBgIQgBgDgCgBQgCgBgEAAIgFAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAgFIAAgFQAAgBAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAIAGAAQAKAAAGADQAFACADAGQADAGAAAJIAAAAQAAANgFALQgFAKgKAGQgJAGgMAAIgPgBg");
	this.shape_61.setTransform(381.395,63.025);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAQAjQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIAAgjIgBgKQgBgDgCgDQgCgBgEgBIgIgBIgYAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAIgBgGIABgFQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAZAAQAJAAAHACQAHACAEADQAEADACAGQACAGAAAJIAAAlQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgHABIgHgBgAgcAjQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIAAgkQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAIAHgBIAHABQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAAkQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgHABIgHgBg");
	this.shape_62.setTransform(373.475,63);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgKAuQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIABgCIAMgZIAGgMIACgHIgBgFIgDgDIgGAAIgUAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgBgEIAAgdQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAgBIAGAAIAIAAQAAABAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAAUIAJAAQAHAAAGACQAFAAADADQADACACAEQABADAAAGQAAAEgCAGQgCAFgEAIIgNAZIgDACIgHABIgGgBg");
	this.shape_63.setTransform(363.3,61.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgWAkIgEgCQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgFg8QgBgBAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIAHgBQAGAAABABQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABIAFA2IAFABQAGAAAFgEQAFgDACgHQADgHAAgKIAAAAIgBgIQgBgDgCgBQgCgBgEAAIgFAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAgFIAAgFQAAgBAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAIAGAAQAKAAAGADQAFACADAGQADAGAAAJIAAAAQAAANgFALQgFAKgKAGQgJAGgMAAIgPgBg");
	this.shape_64.setTransform(356.495,63.025);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgZAkIgBgBIAAgGIAAgFQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAIAiAAIACgWQgBgJgBgFQgCgEgDgBQgDgCgIAAIgPABIgCgCIAAgFIAAgFIACgCIAQgBQANAAAHADQAHADAEAHQADAHAAAOQAAAMgCAUQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAIgEABg");
	this.shape_65.setTransform(349.05,62.95);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgRAkIgBgBIgCgGIACgFIABgCIAUAAIAAgbIAAgLQgBgDgCgBIgGgBIgJABIgBgCIAAgFIAAgFQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAAAIALgBQAIAAAEABQAFACACADQAEADABAGIAAAOIAAAlIAAAEQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_66.setTransform(343.1,62.95);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgGAkQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAhBQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIAGgBIAHABQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAABBQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAABIgHAAIgGAAg");
	this.shape_67.setTransform(339.125,62.975);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgKAuQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIABgCIAMgZIAHgMIABgHIgBgFIgEgDIgFAAIgVAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgBgEIAAgdQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAAAgBIAHAAIAHAAQAAABAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAAUIAJAAQAIAAAEACQAFAAAEADQADACACAEQABADAAAGQAAAEgCAGQgCAFgEAIIgNAZIgDACIgHABIgGgBg");
	this.shape_68.setTransform(334.3,61.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgGAkQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAhBQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIAGgBIAHABQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAABIAABBQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAABIgHAAIgGAAg");
	this.shape_69.setTransform(329.675,62.975);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgWAjIgBgHQAAgFABgCQABAAAAAAQAAgBAAAAQABgBAAAAQABAAAAgBIAVgNIgCgPIgCgHIgCgEIgGgBIgGAAIgCgCIAAgEIAAgGIACgCIAIAAQAIABAEACQAFACADAFQADAEABAJIAHAqIAAAFIgCABIgGAAIgGAAIgCgBIgBgCIgCgMIgUAPIgEABQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAg");
	this.shape_70.setTransform(325.2625,63.05);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgGAVQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAAglQAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAIAGgBIAHABQAAAAABAAQAAABAAAAQABAAAAAAQAAABAAAAIAAAlQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAIgHABIgGgBg");
	this.shape_71.setTransform(321.025,61.55);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAVAjQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIAAgjQAAgIgBgEQgCgEgEgCQgEgBgHAAIgHAAIAAAhQAAAJgCAEQgDAFgEADQgFACgIAAIgFAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIgBgFIABgGQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAIAFAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAIABgHIAAgiIgJAAIgCgBIgBgGIABgFIACgCIAjAAQANAAAIADQAHADADAHQAEAGAAAMIAAAlQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAIgHABIgHgBg");
	this.shape_72.setTransform(314.775,63);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgKAuQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIABgCIANgZIAFgMIACgHIgBgFIgDgDIgHAAIgTAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgBgEIAAgdQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABgBIAGAAIAHAAQABABAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIAAAUIAJAAQAHAAAGACQAEAAAEADQADACABAEQACADAAAGQAAAEgCAGQgCAFgEAIIgNAZIgDACIgHABIgGgBg");
	this.shape_73.setTransform(304.55,61.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AggAkQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAIAIgrIAAgEIgCgFIgEgKIgBgEQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIACgBIAGgBIAHABQABAAAAAAQABAAAAABQAAAAAAAAQABABAAAAIADAIQAGgGAGgDQAFgDAGAAQAIAAAFAEQAGAEACAIQADAHAAANIgBAPIgBAQQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgDABIgdAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIAAgGIAAgFIACgCIARAAIABgWIgBgMQgBgFgCgCQgCgCgEAAQgEAAgDACIgJAIIgIAtQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgHABIgGgBg");
	this.shape_74.setTransform(297.47,62.925);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgGAVQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBAAAAIAAglQAAAAAAgBQABAAAAAAQAAAAAAgBQABAAAAAAIAGgBIAHABQAAAAABAAQAAABAAAAQAAAAABAAQAAABAAAAIAAAlQAAAAAAABQgBAAAAAAQAAAAAAABQgBAAAAAAIgHABIgGgBg");
	this.shape_75.setTransform(291.825,61.55);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AACAjQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgjQgBgJADgKIgdAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAIgBgFIABgFQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIA2AAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIABAFIgBAFQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAIgIAAQgCAKAAAJIAAAjQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgHABIgHgBg");
	this.shape_76.setTransform(286.95,63);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAQAjQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIAAgjIgBgKQgBgDgCgDQgCgBgEgBIgIgBIgYAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAIgBgGIABgFQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIAZAAQAJAAAHACQAHACAEADQAEADACAGQACAGAAAJIAAAlQAAABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgHABIgHgBgAgcAjQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIAAgkQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAIAHgBIAHABQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAIAAAkQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgHABIgHgBg");
	this.shape_77.setTransform(279.875,63);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgyBQQgGgBgDgDQgEgEAAgGIgMiKQAAgGAEgCQAEgBAMAAIAQABQADABABAFIAKB8IALABQAPAAALgIQAMgIAGgQQAGgQAAgVIAAgCQAAgKgDgHQgCgGgFgDQgFgDgHAAIgMAAQgCAAgBgEIgBgMIABgMQABgDACAAIAOAAQAWAAANAGQANAFAGANQAGANAAAVIAAABQAAAfgLAYQgMAXgVANQgVAMgcAAQgTAAgOgCg");
	this.shape_78.setTransform(451.6225,36.925);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgOAvQgFgBAAgDIAAhVQAAgEAFAAQAEgCAKAAQALAAAEACQAFAAAAAEIAABVQAAADgFABQgEACgLAAQgKAAgEgCg");
	this.shape_79.setTransform(438.875,33.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("Ag/BQQgEAAgBgDQgBgEAAgIQAAgJABgDQABgEAEAAIBbAAQACghAAgTQABgVgDgJQgDgIgIgEQgHgDgQAAIgZAAIgCAMQAAAJAAAEQABADADADQAEADAHAEIAFADQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIgBAFIgEAIIgGAKQgCACgCABQgCAAgDgBIgIgEQgOgHgGgHQgHgGgCgJQgBgJAAgPIADghQABgFADgDQACgCAGAAIAxAAQAXAAAOADQAOAEAJAIQAHAIAEAOQAEAOAAAYIgCAiIgDAnQgBAGgCADQgEACgEAAg");
	this.shape_80.setTransform(426.35,36.825);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AhCBqQgEgBgBgEIAAiHQABgDAEgCIAPgBIAQABQAEACAAADIAACHQAAAEgEABQgFACgLAAQgLAAgEgCgAACA1QgCgBAAgDIABgHIAUgxQAGgOADgLQADgMAAgIQgBgJgDgFQgDgFgIgCQgHgDgLAAIhDAAQgDAAgBgDIgBgMIABgMQABgEADAAIBFAAQAZAAAQAFQAQAGAGALQAIAMAAASQAAALgEAPQgEAOgGAPIgTAvQgBAEgFACIgQABQgMAAgEgBg");
	this.shape_81.setTransform(402.7,39.575);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgyBQQgGgBgDgDQgEgEAAgGIgMiKQAAgGAEgCQAEgBAMAAIAQABQADABABAFIAKB8IALABQAPAAALgIQAMgIAGgQQAGgQAAgVIAAgCQAAgKgDgHQgCgGgFgDQgFgDgHAAIgMAAQgCAAgBgEIgBgMIABgMQABgDACAAIAOAAQAWAAANAGQANAFAGANQAGANAAAVIAAABQAAAfgLAYQgMAXgVANQgVAMgcAAQgTAAgOgCg");
	this.shape_82.setTransform(384.9225,36.925);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgOBrQgFgCAAgDIAAjLQAAgEAFgBQAEgBAKAAQALAAAEABQAFABAAAEIAADLQAAADgFACQgEABgLAAQgKAAgEgBg");
	this.shape_83.setTransform(372.225,39.525);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAlBQQgEgBAAgDIAAhRQAAgSgDgJQgDgJgJgEQgIgEgQAAIgZABIAAB7QAAADgFACQgEABgLAAQgLAAgEgBQgFgCAAgDIAAiOQAAgFADgCQACgDAGgBIAZgCIAdgBQAeAAARAIQARAHAHAQQAHAPAAAbIAABUQAAADgEABQgFABgLAAQgKAAgFgBg");
	this.shape_84.setTransform(352.325,36.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgOAvQgFgBAAgDIAAhVQAAgEAFAAQAEgCAKAAQALAAAEACQAFAAAAAEIAABVQAAADgFABQgEACgLAAQgKAAgEgCg");
	this.shape_85.setTransform(339.425,33.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AglBJQgQgJgIgRQgJgSAAgbQAAgdAOgXIgVAAQgDAAgBgDQgBgFAAgIQAAgIABgDQABgEADAAIBKAAQAdAAAUAIQATAHAJARQAJARAAAcQAAAagJAUQgKATgRALQgSAKgZAAQgYAAgRgJgAgdAAQAAARAEAMQADALAIAFQAIAGALgBQAMAAAJgFQAIgHAEgLQAFgMAAgQQAAgTgFgKQgFgKgKgGQgLgEgRAAIgLAAQgNAWAAAcg");
	this.shape_86.setTransform(326.175,37);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("Ag4BRQgDAAgBgEQgCgDAAgJQAAgIACgDQABgFADAAIBNAAQACghAAgRQAAgWgDgKQgDgJgIgDQgIgEgQAAQgOAAgVADQgEAAgBgEIgBgLIABgMQACgEADAAQATgDASAAQAdAAARAHQAPAHAIAPQAGAQAAAfQAAAegEAsQgBAGgDADQgDACgFAAg");
	this.shape_87.setTransform(309.5,36.75);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgOBQQgFgCAAgDIAAiVQAAgEAFgBQAEgBAKAAQALAAAEABQAFABAAAEIAACVQAAADgFACQgEABgLAAQgKAAgEgBg");
	this.shape_88.setTransform(298.775,36.825);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgOBrQgFgCAAgDIAAjLQAAgEAFgBQAEgBAKAAQALAAAEABQAFABAAAEIAADLQAAADgFACQgEABgLAAQgKAAgEgBg");
	this.shape_89.setTransform(291.075,39.525);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgzBNQgBgFAAgJQAAgMACgDQABgEAFgDIAwgfIgFgjQgCgMgCgEQgCgFgEgDQgEgBgIAAIgOAAQgCgBgCgDIgBgMIABgLQACgEACAAIASAAQATAAAKAFQALAEAHAMQAGALADASIAPBhQACAHgBACQgCACgDABQgEABgLAAIgMAAIgFgDQgCgBgBgFIgDgZIguAgQgGAFgEAAQgDAAgCgFg");
	this.shape_90.setTransform(274.12,37);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AAFBPQgEgBAAgEIAAhQQAAgTAFgYIhDAAQgDAAgBgEQgBgDAAgIQAAgJABgDQABgEADAAIB7AAQADAAABAEQABADAAAJQAAAIgBADQgBAEgDAAIgRAAQgFAXAAAUIAABQQAAAEgEABQgFACgLAAQgKAAgFgCg");
	this.shape_91.setTransform(261.425,36.875);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgOBQQgFgCAAgDIAAiVQAAgEAFgBQAEgBAKAAQALAAAEABQAFABAAAEIAACVQAAADgFACQgEABgLAAQgKAAgEgBg");
	this.shape_92.setTransform(250.625,36.825);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgYBpQgDgCAAgDQAAgCACgEIAcg4QAKgRAEgLQAEgKAAgHQAAgGgCgEQgDgDgGgCQgGgCgIAAIgtAAQgFAAgDgDQgDgDAAgFIAAhAQAAgDAFgBQAEgCAKAAQAMAAAEACQAFABgBADIAAAsIAWAAQAPAAANADQALACAHAGQAHAFADAIQAEAJAAALQAAALgEANQgFANgIARIgeA4QgCAEgFABQgGACgKAAIgPgBg");
	this.shape_93.setTransform(239.7,34.375);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgJBoQgFgBgCgCQgCgDgBgEIgBgLIABgKQABgEACgDQACgDAFAAQAEgCAFAAQAGAAAEACQAEAAADADQACADABAEIABAKIgBALQgBAEgCADQgDACgEABQgEACgGAAQgFAAgEgCgAgHAuIgFgCQgBAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAIgBgDIgEiIIABgDIAEgDIAGgCIAJAAIAKAAIAGACIAEADIAAADIgDCIIgBADIgDACIgFACIgIAAIgHAAg");
	this.shape_94.setTransform(221.725,34.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgUAbIgCgBIgBgEIABgEIACgCIAdAAIABgQIgBgKQgBgDgCgBIgHgBIgIAAIgBAEIAAAEIABACIADACIADABIAAABIAAABIgCADIgCADIgBABIgBAAIgDgBIgHgFIgDgEIAAgIIABgLIABgDIACgBIARAAIALABQAFACADACQADADABAFQACAEAAAIIgBALIgCANIgBADIgCABg");
	this.shape_95.setTransform(365,135.225);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgEAbQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAgxIABgCIAEAAIAFAAIABACIAAAxQAAAAAAAAQAAABAAAAQAAAAAAAAQgBABAAAAIgFAAIgEAAg");
	this.shape_96.setTransform(360.9,135.225);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAQAaIgCgBIAAgbIgBgJQgBgCgDgBIgIgCIgFAAIAAAZQAAAGgCAEQgCAEgDABQgEACgFAAIgFAAIgBgBIgBgDIABgFIABgBIAEAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAABAAIABgGIAAgZIgIAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIAAgEIAAgEIABgBIAaAAQAKAAAGACQAGACACAFQADAFAAAKIAAAbIgCABIgFABIgFgBg");
	this.shape_97.setTransform(356.275,135.25);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAMAbIgBgCIAAgaIgBgJQgBgDgDgBQgDgCgEAAIgJAAIAAApQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAIgFAAIgFAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAAAAAIAAgvIABgCIADgBIAIgBIAKAAQAJAAAGACQAFADADAFQACAFAAAJIAAAbIgBACIgGAAIgFAAg");
	this.shape_98.setTransform(350.275,135.225);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgWAbIgCgBIAAgEIAAgEIACgBIAJAAIgIgoIAAgBQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAEgBIAGABIACACIAHAnQAEAAACgCQADgCABgEQABgEABgFIAAgTIAAgEIACgBIAFgBIAFABIABABIAAAEQAAAPgBAIQgCAJgDAGQgDAEgGACQgGADgJAAg");
	this.shape_99.setTransform(341.975,135.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgHAjIgCgCIABgCIAJgSIAFgKIABgFIgBgDIgDgCIgEAAIgPAAIgCgBIgBgDIAAgVQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAIAFAAIAFAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABIAAAOIAGAAIAJABQAEABADACQACACABACIABAHIgBAHIgFAKIgJATIgDACIgFAAIgEAAg");
	this.shape_100.setTransform(337.025,134.425);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgEAQIgCgBIAAgdIACgBIAEgBIAFABIACABIAAAdIgCABIgFABIgEgBg");
	this.shape_101.setTransform(331.25,134.15);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AACAaQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBIAAgaQAAgFACgJIgWAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIAAgEIAAgEIABgBIApAAIABABIAAAEIAAAEQAAAAAAABQAAAAgBAAQAAAAAAAAQAAAAAAAAIgGAAIgCAOIAAAaQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgFABIgFgBg");
	this.shape_102.setTransform(327.625,135.25);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgEAQIgBgBIAAgdIABgBIAEgBIAFABIABABIAAAdIgBABIgFABIgEgBg");
	this.shape_103.setTransform(324,134.15);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#999999").s().p("AgyBQQgGgBgDgDQgEgEAAgGIgMiKQAAgGAEgCQAEgBAMAAIAQABQADABABAFIAKB8IALABQAPAAALgIQAMgIAGgQQAGgQAAgVIAAgCQAAgKgDgHQgCgGgFgDQgFgDgHAAIgMAAQgCAAgBgEIgBgMIABgMQABgDACAAIAOAAQAWAAANAGQANAFAGANQAGANAAAVIAAABQAAAfgLAYQgMAXgVANQgVAMgcAAQgTAAgOgCg");
	this.shape_104.setTransform(450.0725,38.475);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#999999").s().p("AgOAvQgFAAAAgEIAAhVQAAgDAFgBQAEgCAKAAQALAAAEACQAFABAAADIAABVQAAAEgFAAQgEACgLAAQgKAAgEgCg");
	this.shape_105.setTransform(437.325,35.15);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#999999").s().p("AhABQQgDAAAAgDQgCgEAAgIQAAgJACgDQAAgEADAAIBcAAQACghABgTQgBgVgCgJQgDgIgIgEQgIgDgPAAIgZAAIgBAMQgBAJABAEQABADACADQADADAIAEIAFADQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIgBAFIgEAIIgGAKQgCACgCABQgCAAgDgBIgIgEQgNgHgHgHQgGgGgCgJQgCgJABgPIACghQABgFADgDQACgCAGAAIAyAAQAVAAAPADQAOAEAJAIQAIAIAEAOQADAOAAAYIgCAiIgDAnQAAAGgEADQgCACgGAAg");
	this.shape_106.setTransform(424.8,38.375);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#999999").s().p("AhCBqQgFgBABgEIAAiHQgBgDAFgCIAPgBIAQABQAEACAAADIAACHQAAAEgEABQgFACgLAAQgKAAgFgCgAACA1QgCgBAAgDIABgHIAUgxQAGgOADgLQACgMAAgIQAAgJgCgFQgEgFgHgCQgIgDgLAAIhDAAQgDAAgBgDIgBgMIABgMQABgEADAAIBFAAQAZAAAPAFQARAGAGALQAIAMAAASQAAALgEAPQgEAOgGAPIgTAvQgBAEgGACIgPABQgMAAgEgBg");
	this.shape_107.setTransform(401.15,41.125);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#999999").s().p("AgyBQQgGgBgDgDQgEgEAAgGIgMiKQAAgGAEgCQAEgBAMAAIAQABQADABABAFIAKB8IALABQAPAAALgIQAMgIAGgQQAGgQAAgVIAAgCQAAgKgDgHQgCgGgFgDQgFgDgHAAIgMAAQgCAAgBgEIgBgMIABgMQABgDACAAIAOAAQAWAAANAGQANAFAGANQAGANAAAVIAAABQAAAfgLAYQgMAXgVANQgVAMgcAAQgTAAgOgCg");
	this.shape_108.setTransform(383.3725,38.475);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#999999").s().p("AgOBrQgFgCAAgDIAAjLQAAgEAFgBQAEgBAKAAQALAAAEABQAFABAAAEIAADLQAAADgFACQgEABgLAAQgKAAgEgBg");
	this.shape_109.setTransform(370.675,41.075);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#999999").s().p("AAlBQQgEgCAAgDIAAhQQAAgSgDgJQgDgJgJgEQgIgEgQAAIgZAAIAAB8QAAAEgFABQgEACgLAAQgLAAgEgCQgFgBAAgEIAAiOQAAgFADgDQACgDAGAAIAZgBIAdgBQAegBARAIQARAHAHAQQAHAPAAAbIAABTQAAADgEACQgFACgLAAQgKAAgFgCg");
	this.shape_110.setTransform(350.775,38.35);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#999999").s().p("AgOAvQgFAAAAgEIAAhVQAAgDAFgBQAEgCAKAAQALAAAEACQAFABAAADIAABVQAAAEgFAAQgEACgLAAQgKAAgEgCg");
	this.shape_111.setTransform(337.875,35.15);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#999999").s().p("AglBJQgQgJgIgRQgJgSAAgbQAAgdAOgXIgVAAQgDAAgBgDQgBgFAAgIQAAgIABgEQABgDADAAIBKAAQAdAAAUAIQATAIAJAQQAJARAAAcQAAAbgJATQgKAUgRAKQgSAKgZAAQgYAAgRgJgAgdAAQAAARAEALQADAMAIAFQAIAGALgBQAMAAAJgFQAIgHAEgLQAFgMAAgQQAAgTgFgKQgFgLgKgEQgLgFgRAAIgLAAQgNAWAAAcg");
	this.shape_112.setTransform(324.625,38.55);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#999999").s().p("Ag4BRQgDAAgBgDQgBgFgBgIQABgIABgEQABgDADAAIBMAAQADgiAAgRQAAgWgDgKQgDgIgIgEQgHgDgSAAQgNAAgVACQgDAAgCgEIAAgMIAAgLQACgEADAAQATgDASAAQAdAAARAHQAQAHAGAPQAIAQgBAgQAAAdgEAsQgBAGgDADQgDACgFAAg");
	this.shape_113.setTransform(307.95,38.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#999999").s().p("AgOBQQgFgCAAgDIAAiVQAAgEAFgBQAEgBAKAAQALAAAEABQAFABAAAEIAACVQAAADgFACQgEABgLAAQgKAAgEgBg");
	this.shape_114.setTransform(297.225,38.375);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#999999").s().p("AgOBrQgFgCAAgDIAAjLQAAgEAFgBQAEgBAKAAQALAAAEABQAFABAAAEIAADLQAAADgFACQgEABgLAAQgKAAgEgBg");
	this.shape_115.setTransform(289.525,41.075);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#999999").s().p("AgzBNQgBgEAAgKQAAgMACgEQABgDAFgDIAwgfIgFgjQgCgLgCgGQgCgFgEgCQgEgCgIAAIgOAAQgCAAgCgDIgBgMIABgMQACgDACAAIASAAQATAAAKAFQALAEAHALQAGAMADASIAPBhQACAHgBACQgCACgDACQgEABgLAAIgMgBIgFgDQgCgBgBgFIgDgZIguAgQgGAFgEAAQgDAAgCgFg");
	this.shape_116.setTransform(272.57,38.55);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#999999").s().p("AAFBPQgEgBAAgEIAAhQQAAgTAFgYIhDAAQgDAAgBgEQgBgDAAgIQAAgJABgDQABgEADAAIB7AAQADAAABAEQABADAAAJQAAAIgBADQgBAEgDAAIgRAAQgFAXAAAUIAABQQAAAEgEABQgFACgLAAQgKAAgFgCg");
	this.shape_117.setTransform(259.875,38.425);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#999999").s().p("AgOBQQgFgCAAgDIAAiVQAAgEAFgBQAEgBAKAAQALAAAEABQAFABAAAEIAACVQAAADgFACQgEABgLAAQgKAAgEgBg");
	this.shape_118.setTransform(249.075,38.375);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#999999").s().p("AgXBpQgEgCgBgDQABgCACgEIAcg4QAKgRAEgLQAEgKAAgHQAAgGgCgEQgDgDgGgCQgGgCgIAAIgtAAQgFAAgDgDQgDgDAAgFIAAhAQAAgDAEgBQAFgCAKAAQAMAAAEACQAFABgBADIAAAsIAWAAQAQAAAMADQALACAHAGQAIAFACAIQAEAJAAALQAAALgEANQgEANgKARIgdA4QgCAEgGABQgFACgLAAIgNgBg");
	this.shape_119.setTransform(238.15,35.925);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#999999").s().p("AgJBpQgFgBgCgDQgCgDgBgEIgBgLIABgKQABgFACgCQACgCAFgCQAEgBAFAAQAGAAAEABQAEACADACQACACABAFIABAKIgBALQgBAEgCADQgDADgEABQgEABgGAAQgFAAgEgBgAgHAtIgFgBQgBAAAAAAQgBgBAAAAQAAAAAAAAQgBgBAAAAIgBgDIgEiIIABgDIAEgDIAGgCIAJAAIAKAAIAGACIAEADIAAADIgDCIIgBADIgDACIgFABIgIABIgHgBg");
	this.shape_120.setTransform(220.175,36.05);

	this.instance_4 = new lib.Path_4();
	this.instance_4.setTransform(344.5,139.2,0.9733,1.2322,0,0,0,255.3,109.3);
	this.instance_4.shadow = new cjs.Shadow("rgba(102,102,102,1)",3,3,4);

	this.instance_5 = new lib.inner();
	this.instance_5.setTransform(345.5,138.5,1.0364,1.5005,0,0,0,255.3,109.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{y:-14.75}}]}).to({state:[{t:this.shape},{t:this.text,p:{y:-11.15}}]},1).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

	// Layer_3
	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFF99").s().p("AtBE5QgjAAgagdQgZgdAAgpIAAmqQAAgqAZgdQAagdAjAAIaCAAQAkAAAaAdQAZAdAAAqIAAGqQAAApgZAdQgaAdgkAAg");
	this.shape_121.setTransform(0.75,0.6);
	this.shape_121._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_121).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.3,-30.7,692.5999999999999,320.4);


// stage content:
(lib.piggibank = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this;
		
		stage.enableMouseOver(24);
		func_off(); //---------- פונקציה שנועדה לבטל את כל הפונקציות
		func_on(); //----------- פונקציה שנועדה להחזיר את כל הפונקציות
		func_on_bag();
		var counter = 0; //-----------  משתנה שנוצר כדי לספור את כמות הלחיצות במטבעות
		var bag_num = 0; //----------- משתנה שנוצר כדי לספור את כמות הלחיצות בשקים
		var coin_num = 0; //---------- משתנה שנועד לתת "שם" למטבעות כדי לדעת איזה מטבע לחוץ
		coin_fade(); //--------- פונקציה שהופכת את כל המטבעות למצב אפור
		coin_basic(); //-------- פונקציה שהופכת את כל המטבעות למצב הבסיסי
		gray_true(); //--------- פונקציה שגורנת למטבעות האפורים להופיעה
		gray_play(); //--------- פונקציה שמפעילה את האנימציה הפנימית של המטבעות האפורים
		gray_false(); //-------- פונקציה שהופכת את המטבעות האפורים ללא נראים
		bag_fade(); //---------- פונקציה שגורמת לשקים להיות במצב אפור
		bag_basic(); //--------- פונקציה שהופכת את כל השקים למצב הבסיסי
		self.bag_info.visible = false; //------- קוד שמבטל את הנראות של דף המידע של השקים-מטבעות
		self.big_coin.visible = false; //------- קוד שמבטל את הנראות של דף המידע של המטבע הגדול
		self.black_x.visible = false; //------- קוד שמבטל את הנראות של דף המידע של האיקס שעל המטבע הגדול
		
		function func_off() {
			self.bag_luxury.mouseEnabled = false;
			self.bag_home.mouseEnabled = false;
			self.bag_daily.mouseEnabled = false;
			self.coin_electric.mouseEnabled = false;
			self.coin_bus.mouseEnabled = false;
			self.coin_water.mouseEnabled = false;
			self.coin_diy.mouseEnabled = false;
			self.coin_car.mouseEnabled = false;
			self.coin_fun.mouseEnabled = false;
			self.coin_phon.mouseEnabled = false;
			self.coin_shop.mouseEnabled = false;
			self.coin_change.mouseEnabled = false;
			self.coin_member.mouseEnabled = false;
		}
		
		function func_on() {
			self.bag_luxury.mouseEnabled = true;
			self.bag_home.mouseEnabled = true;
			self.bag_daily.mouseEnabled = true;
			self.coin_electric.mouseEnabled = true;
			self.coin_bus.mouseEnabled = true;
			self.coin_water.mouseEnabled = true;
			self.coin_diy.mouseEnabled = true;
			self.coin_car.mouseEnabled = true;
			self.coin_fun.mouseEnabled = true;
			self.coin_phon.mouseEnabled = true;
			self.coin_shop.mouseEnabled = true;
			self.coin_change.mouseEnabled = true;
			self.coin_member.mouseEnabled = true;
		}
		function func_on_bag() {
			self.bag_luxury.mouseEnabled = true;
			self.bag_home.mouseEnabled = true;
			self.bag_daily.mouseEnabled = true;
		}
		
		//-----------------------------------------------הוראות למשתמש
		
		self.instruction.addEventListener("mouseover", over_instruction); //---פונקציה של מעבר עכבר על ההוראות למשתמש
		self.instruction.addEventListener("mouseout", out_instruction); //--- פונקציה של יציאה ממעבר עכבר על ההוראות למשתמש
		self.instruction.addEventListener("click", click_instruction); //--- פונקציה של לחיצה על ההוראות למשתמשש
		self.blue_x.addEventListener("click", clickblue_x); //---- פונקציה של לחיצה על האיקס הכחול שנמצא על ההוראות
		self.blue_x.visible = false; //--- קוד שמבטל את הנראות של האקס
		
		function over_instruction() { //---במעבר עכבר
			self.instruction.gotoAndStop(1); //--- מעבר למצב היילייט(בולט)
		}
		
		function out_instruction() { //---יציאה ממעבר עכבר
			self.instruction.gotoAndStop(0); //--- חזרה למצב הרגיל
		}
		
		function click_instruction() { //--- לחיצה על ההוראות
			self.instruction.gotoAndStop(2); //--- מעבר לתצוגה של ההוראות המלאות
			self.blue_x.visible = true; //--- החזרת האיקס הכחול לתצוגה
			self.instruction.mouseEnabled = false; //--- ביטל כל הפונקציות של ההוראות
		}
		
		function clickblue_x() { //--- לחיצה על האיקס הכחול
			self.instruction.gotoAndStop(0) //--- העבר את ההוראות למצה המקורי
			self.instruction.mouseEnabled = true; //--- החזרת כל הפונקציות של ההוראות
			self.blue_x.visible = false; //--- ביטל פונקציית האיקס הכחול
		}
		
		//---------------------------------- אודות
		
		self.about_us.addEventListener("mouseover", over_about_us);
		self.about_us.addEventListener("mouseout", out_about_us);
		self.about_us.addEventListener("click", click_about_us);
		self.pink_x.addEventListener("click", click_pink_x);
		self.pink_x.visible = false;
		self.HIT.visible = false;
		
		
		function over_about_us() {
			self.about_us.gotoAndStop(1);
		}
		
		function out_about_us() {
			self.about_us.gotoAndStop(0);
		}
		
		function click_about_us() {
			self.about_us.gotoAndStop(2);
			self.pink_x.visible = true;
			self.HIT.visible = true;
			self.about_us.mouseEnabled = false;
			func_off();
		}
		
		function click_pink_x() {
			self.about_us.gotoAndStop(0);
			self.about_us.mouseEnabled = true;
			self.pink_x.visible = false;
			self.HIT.visible = false;
			func_on();
		}
		
		self.HIT.addEventListener("click", goURL); //פונקצית לחיצה על לוגו המכון
		
		function goURL() {
			window.open("https://www.hit.ac.il/telem/overview", "_blank"); // מעבבר לדף נפרד של פקולטת טכנולוגית למידה
		}
		//--------------------------------- כללי מטבעות
		
		function coin_fade() {
			self.coin_car.gotoAndStop(2);
			self.coin_fun.gotoAndStop(2);
			self.coin_member.gotoAndStop(2);
			self.coin_electric.gotoAndStop(2);
			self.coin_bus.gotoAndStop(2);
			self.coin_change.gotoAndStop(2);
			self.coin_water.gotoAndStop(2);
			self.coin_diy.gotoAndStop(2);
			self.coin_phon.gotoAndStop(2);
			self.coin_shop.gotoAndStop(2);
		}
		
		function coin_basic() {
			self.coin_car.gotoAndStop(0);
			self.coin_fun.gotoAndStop(0);
			self.coin_member.gotoAndStop(0);
			self.coin_electric.gotoAndStop(0);
			self.coin_bus.gotoAndStop(0);
			self.coin_change.gotoAndStop(0);
			self.coin_water.gotoAndStop(0);
			self.coin_diy.gotoAndStop(0);
			self.coin_phon.gotoAndStop(0);
			self.coin_shop.gotoAndStop(0);
		}
		
		function gray_false() {
			self.gray_coin1.visible = false;
			self.gray_coin2.visible = false;
			self.gray_coin3.visible = false;
		}
		
		function gray_true() {
			self.gray_coin1.visible = true;
			self.gray_coin2.visible = true;
			self.gray_coin3.visible = true;
		}
		
		function gray_play() {
			self.gray_coin1.gotoAndPlay(1);
			self.gray_coin2.gotoAndPlay(1);
			self.gray_coin3.gotoAndPlay(1);
		}
		
		//----------------------------------------------כללי מטבעות
		
		function bag_fade() {
			self.bag_luxury.gotoAndStop(2);
			self.bag_home.gotoAndStop(2);
			self.bag_daily.gotoAndStop(2);
		}
		
		function bag_basic() {
			self.bag_luxury.gotoAndStop(0);
			self.bag_home.gotoAndStop(0);
			self.bag_daily.gotoAndStop(0);
		}
		
		//----------------------------------------------שק מותרות
		self.bag_luxury.addEventListener("mouseover", overbag_luxury); //--- פונקציית מעבר עכבר
		self.bag_luxury.addEventListener("mouseout", outbag_luxury); //--- פונקציית יציאה ממעבר עכבר
		self.bag_luxury.addEventListener("click", clickbag_luxury); //--- פונקציית לחיצה
		
		function overbag_luxury() { //--- במעבר עכבר
			self.bag_luxury.gotoAndStop(1); //--- עבר את השק למצב מודגש
			self.bag_info.visible = true; //--- הצגת דף התוכן
			self.bag_info.gotoAndStop(0); //--- מעבר של דף התוכן לעמוד הראשון שלו
			coin_fade(); //--- פונקציה להפיכת כל המטבעות לאפורים
			self.coin_car.gotoAndStop(1); //--- הצגת מטבע רכב במצב בולט
			self.coin_fun.gotoAndStop(1); //--- הצגת מטבע בילויים במצב בולט
			self.coin_member.gotoAndStop(1); //--- הצגת מטבע מנויים במצב בולט
		}
		
		function outbag_luxury() { //--- ביציאה ממעבר עכבר
			self.bag_luxury.gotoAndStop(0); //---החזרת השק למצב הרגיל 
			self.bag_info.visible = false; //--- ביטול נראות תוכן השק
			coin_basic(); //--- החזרת המטבעות למצב רגיל
		}
		
		var mybag1 = 0;
		function clickbag_luxury() { //--- בלחיצה 
			mybag1++;
			bag_num++; //--- המשתנה מקבל +1
			if (bag_num == 1) { //--- אם המשתנה =1 בצע
				self.bag_luxury.removeEventListener("mouseout", outbag_luxury); //---ביטול הפונקציה יציאה ממעבר עכבר
				bag_fade(); //--- הפיכת כל השקים לקהים
				overbag_luxury(); //--- בצע את כל מה שיש בפונקציית מעבר עכבר
				func_off(); //--- בטל את כל הפונקציות 
				self.bag_luxury.mouseEnabled = true; //---החזר את הפונקציות הקשורות לשק מותרות
				self.coin_car.mouseEnabled = true; //--- החזר את כל הפונקציות הקשורות למטבע הרכב
				self.coin_fun.mouseEnabled = true; //---החזר את כל הפונקציות הקשורות למטבע הבילויים
				self.coin_member.mouseEnabled = true; //---החזר את כל הפונקציות הקשורות למטבע המנויים
				self.coin_car.removeEventListener("mouseover", overcoin_car); //--- בטל את המעבר עכבר של מטבע הרכב
				self.coin_car.removeEventListener("mouseout", outcoin_car); //--- בטל יציאה ממעבר עכבר של מטבע הרכב
				self.coin_fun.removeEventListener("mouseover", overcoin_fun); //--- בטל את המעבר עכבר של מטבע הבילויים
				self.coin_fun.removeEventListener("mouseout", outcoin_fun); //--- בטל יציאה ממעבר עכבר של מטבע הבילויים
				self.coin_member.removeEventListener("mouseover", overcoin_member); //--- בטל את המעבר עכבר של מטבע המנויים
				self.coin_member.removeEventListener("mouseout", outcoin_member); //--- בטל יציאה ממעבר עכבר של מטבע המנויים
			} else {
				if (bag_num == 2) { //--- אם המשתנה == 2 בצע
					self.bag_luxury.addEventListener("mouseout", outbag_luxury); //---החזרת הפונקציה של יציאה ממעבר עכבר של שק מותרות
					bag_basic(); //--- החזרת כל השקים למצב בסיסי
					outbag_luxury(); //--- בצע את כל מה שיש בפונקציה יציאה ממעבר עכבק
					mybag1 = 0; // החזרת המשתנה ל - 0
					bag_num = 0; //--- החזרת מספר המשתנה ל-0
					func_on(); //--- החזרת כל הפונקציות לתפעול
					self.coin_car.addEventListener("mouseover", overcoin_car); //--- החזרת הפונקציה של מעבר עכבר על מטבע רכב
					self.coin_car.addEventListener("mouseout", outcoin_car); //--- החזרת הפונקציה של יציאה ממעבר עכבר על מטבע רכב
					self.coin_fun.addEventListener("mouseover", overcoin_fun); //--- החזרת הפונקציה של מעבר עכבר על מטבע בילויים
					self.coin_fun.addEventListener("mouseout", outcoin_fun); //--- החזרת הפונקציה של יציאה ממעבר עכבר על מטבע בילויים
					self.coin_member.addEventListener("mouseover", overcoin_member); //--- החזרת הפונקציה של מעבר עכבר על מטבע מנויים
					self.coin_member.addEventListener("mouseout", outcoin_member); //--- החזרת הפונקציה של יציאה ממעבר עכבר על מטבע מנויים
				}
			}
		}
		//--------------------------------------שק תחזוקת בית
		self.bag_home.addEventListener("mouseover", overbag_home);
		self.bag_home.addEventListener("mouseout", outbag_home);
		self.bag_home.addEventListener("click", clickbag_home);
		self.bag_home.bag_txt.text = "תחזוקת הבית"; //--- שינוי השם שכתוב על השק
		
		
		function overbag_home() {
			self.bag_home.gotoAndStop(1);
			self.bag_info.visible = true;
			self.bag_info.gotoAndStop(1);
			coin_fade();
			self.coin_water.gotoAndStop(1);
			self.coin_electric.gotoAndStop(1);
			self.coin_phon.gotoAndStop(1);
			self.coin_shop.gotoAndStop(1);
		}
		
		function outbag_home() {
			self.bag_info.visible = false;
			coin_basic();
			bag_basic();
		}
		var mybag2 = 0;
		function clickbag_home() {
			mybag2++;
			bag_num++;
			if (bag_num == 1) {
				self.bag_home.removeEventListener("mouseout", outbag_home);
				bag_fade();
				overbag_home();
				func_off();
				self.bag_home.mouseEnabled = true;
				self.coin_water.mouseEnabled = true;
				self.coin_electric.mouseEnabled = true;
				self.coin_phon.mouseEnabled = true;
				self.coin_shop.mouseEnabled = true;
				self.coin_water.removeEventListener("mouseover", overcoin_water);
				self.coin_water.removeEventListener("mouseout", outcoin_water);
				self.coin_electric.removeEventListener("mouseover", overcoin_electric);
				self.coin_electric.removeEventListener("mouseout", outcoin_electric);
				self.coin_phon.removeEventListener("mouseover", overcoin_phon);
				self.coin_phon.removeEventListener("mouseout", outcoin_phon);
				self.coin_shop.removeEventListener("mouseover", overcoin_shop);
				self.coin_shop.removeEventListener("mouseout", outcoin_shop);
			} else {
				if (bag_num == 2) {
					outbag_home();
					self.bag_home.addEventListener("mouseout", outbag_home);
					bag_num = 0;
					mybag2 = 0;
					func_on();
					self.coin_water.addEventListener("mouseover", overcoin_water);
					self.coin_water.addEventListener("mouseout", outcoin_water);
					self.coin_electric.addEventListener("mouseover", overcoin_electric);
					self.coin_electric.addEventListener("mouseout", outcoin_electric);
					self.coin_phon.addEventListener("mouseover", overcoin_phon);
					self.coin_phon.addEventListener("mouseout", outcoin_phon);
				}
			}
		}
		
		//--------------------------------הוצאות יום יומיות
		self.bag_daily.addEventListener("mouseover", overbag_daily);
		self.bag_daily.addEventListener("mouseout", outbag_daily);
		self.bag_daily.addEventListener("click", clickbag_daily);
		self.bag_daily.bag_txt.text = "הוצאות יום יומיות";
		
		function overbag_daily() {
			self.bag_daily.gotoAndStop(1);
			self.bag_info.visible = true;
			self.bag_info.gotoAndStop(2);
		
			coin_fade();
			self.coin_diy.gotoAndStop(1);
			self.coin_shop.gotoAndStop(1);
			self.coin_bus.gotoAndStop(1);
			self.coin_change.gotoAndStop(1);
			self.coin_car.gotoAndStop(1);
		}
		
		function outbag_daily() {
			self.bag_daily.gotoAndStop(0);
			self.bag_info.visible = false;
			coin_basic();
		}
		var mybag3 = 0;
		function clickbag_daily() {
			mybag3++;
			bag_num++;
			if (bag_num == 1) {
				self.bag_daily.removeEventListener("mouseout", outbag_daily);
				bag_fade();
				overbag_daily();
				func_off();
				self.bag_daily.mouseEnabled = true;
				self.coin_diy.mouseEnabled = true;
				self.coin_shop.mouseEnabled = true;
				self.coin_bus.mouseEnabled = true;
				self.coin_change.mouseEnabled = true;
				self.coin_car.mouseEnabled = true;
				self.coin_diy.removeEventListener("mouseover", overcoin_diy);
				self.coin_diy.removeEventListener("mouseout", outcoin_diy);
				self.coin_shop.removeEventListener("mouseover", overcoin_shop);
				self.coin_shop.removeEventListener("mouseout", outcoin_shop);
				self.coin_bus.removeEventListener("mouseover", overcoin_bus);
				self.coin_bus.removeEventListener("mouseout", outcoin_bus);
				self.coin_change.removeEventListener("mouseover", overcoin_change);
				self.coin_change.removeEventListener("mouseout", outcoin_change);
				self.coin_car.removeEventListener("mouseover", overcoin_car);
				self.coin_car.removeEventListener("mouseout", outcoin_car)
			} else {
				if (bag_num == 2) {
					self.bag_daily.addEventListener("mouseout", outbag_daily);
					outbag_daily();
					bag_basic();
					bag_num = 0;
					mybag3 = 0;
					func_on();
					self.coin_diy.addEventListener("mouseover", overcoin_diy);
					self.coin_diy.addEventListener("mouseout", outcoin_diy);
					self.coin_shop.addEventListener("mouseover", overcoin_shop);
					self.coin_shop.addEventListener("mouseout", outcoin_shop);
					self.coin_bus.addEventListener("mouseover", overcoin_bus);
					self.coin_bus.addEventListener("mouseout", outcoin_bus);
					self.coin_change.addEventListener("mouseover", overcoin_change);
					self.coin_change.addEventListener("mouseout", outcoin_change);
				}
			}
		}
		
		//---------------------------------חשמל
		self.coin_electric.addEventListener("mouseover", overcoin_electric); //--- פונקציית מעבר עכבר 
		self.coin_electric.addEventListener("mouseout", outcoin_electric); //--- פונקציה יציאה ממעבר עכבר
		self.coin_electric.addEventListener("click", clickcoin_electric); //--- פונקציית לחיצה
		
		function overcoin_electric() { //--- במעבר עכבר
			coin_fade(); //--- פונקצייה שהופכת את כל המטבעות לאפורים
			bag_fade(); //--- פונקציה שהופכת שאת כל השקים לאפורים
			self.coin_electric.gotoAndStop(1); //--- העבר את מטבע חשמל למצב בולט
			self.bag_home.gotoAndStop(1); //--- העבר את שק תחזוקת בית למצב בולט
			self.bag_info.visible = true; //--- הפיכת התוכן למוצג
			self.bag_info.gotoAndStop(3); //--- העברת התוכן לדף הרביעי
		}
		
		function outcoin_electric() { //--- ביציאה ממעבר עכבר
			coin_basic(); //--- פונקציה שהופכת את כל המטבעות למצב בסיסי
			bag_basic(); //--- פונקציה מחזירה את כל השקים למצב בסיסי
			self.bag_info.visible = false; //--- הפיכת התוכן לבלתי נראה 
		}
		
		function clickcoin_electric() { //--- בלחיצה
			coin_num = 1; //--- מהספר המטבע שנלחץ
			counter++; //--- המשתנה מקבל +1
			self.gray_coin1.txt_gray.y = 15; //--- שינוי מיקום הטקסט במטבע האפור
		
			self.gray_coin1.txt_gray.gray_txt.text = "אם לא משתמשים מכבים"; //--- שנה את תוכן המטבע האפור
			self.gray_coin2.txt_gray.gray_txt.text = "התקינו עמעם"; //--- שנה את תוכן המטבע האפור
			self.gray_coin3.txt_gray.gray_txt.text = "נורות חסכוניות"; //--- שנה את תוכן המטבע האפור
		
		
			if (bag_num == 1) { // אם  המשתנה של השק =1
				overcoin_electric(); // בצע את פונקציית מעבר עכבר של המטבע
				gray_true(); // תציג את המטבעות האפורים
				gray_play(); // תפעיל את האנימציה הפנימית של המטבעות האפורים
				self.coin_water.gotoAndStop(1); // תציג את המטבעות שבאותו השק 
				self.coin_shop.gotoAndStop(1); // תציג את המטבעות שבאותו השק 
				self.coin_phon.gotoAndStop(1); // תציג את המטבעות שבאותו השק 
				bag_num++; // תגדיל את המשתנה ב-1 
			} else {
				if (bag_num == 2) { // אם  המשתנה של השק =2
					self.bag_info.visible = false; // בטל את חלונית המידעשל המטבע
					gray_false(); // תפסיק להציג את המטבעות האפורים
					counter = 0; // משתנה =0
					bag_num = 1; // משתנה = 1
					coin_num = 0; // משתנה = 0 
				} else {
					if (counter == 1) { // אם המשתנה של המטבעות=1
						overcoin_electric(); // בצע את פונקציית מעבר עכבר של המטבע
						gray_true(); // תציג את המטבעות האפורים
						gray_play(); // תפעיל את האנימציה הפנימית של המטבעות האפורים
						func_off(); // הפעל את הפונקציה שמבטלת את כל הפונקציות
						self.coin_electric.mouseEnabled = true; // הפעל את הפונקציות של מטבע חשמל
						self.coin_electric.removeEventListener("mouseover", overcoin_electric); // בטל את הפונקציה של מעבר עכבר על מטבע חשמל
						self.coin_electric.removeEventListener("mouseout", outcoin_electric); // בטל את הפונקציה של יציאה ממעבר עכבר של מטבע חשמל
					} else {
						if (counter == 2) { // אם המשתנה של המטבעות = 2
							coin_num = 0; // משתנה זה =0
							outcoin_electric(); // הפעל את פונקצית יציאה ממעבר עכבר של מטבע חשמל
							gray_false(); // הפעל פונקצה שמפסיקה להציג את המטבעות האפורים
							func_on(); // הפעל פונקציה שמפעילה את כל הפונקציות
							self.coin_electric.addEventListener("mouseover", overcoin_electric); // החזר את הפונקציה של מעבר עכבר של מטבע חשמל לעבוד
							self.coin_electric.addEventListener("mouseout", outcoin_electric); // החזר את הפונקציה של יציאה ממעבר עכבר של מטבע חשמל
							counter = 0; // משתנה =0
						}
					}
				}
			}
		
		}
		
		
		//-----------------------------------תחבורה ציבורית
		self.coin_bus.addEventListener("mouseover", overcoin_bus);
		self.coin_bus.addEventListener("mouseout", outcoin_bus);
		self.coin_bus.addEventListener("click", clickcoin_bus);
		self.coin_bus.coin_txt.text = "תחבורה ציבורית";
		
		function overcoin_bus() {
			coin_fade();
			bag_fade();
			self.coin_bus.gotoAndStop(1);
			self.bag_daily.gotoAndStop(1);
			self.bag_info.visible = true;
			self.bag_info.gotoAndStop(4);
		}
		
		function outcoin_bus() {
			coin_basic();
			bag_basic();
			self.bag_info.visible = false;
		}
		
		function clickcoin_bus() {
			counter++;
			self.gray_coin1.txt_gray.gray_txt.text = "כרטיס רב קו";
			self.gray_coin2.txt_gray.gray_txt.text = "טעינה לפי מסלולים";
			self.gray_coin3.txt_gray.gray_txt.text = "זכאות להנחות";
			self.gray_coin1.txt_gray.y = 25;
			if (bag_num == 1) {
				overcoin_bus();
				gray_true();
				gray_play();
				self.coin_diy.gotoAndStop(1);
				self.coin_shop.gotoAndStop(1);
				self.coin_change.gotoAndStop(1);
				bag_num++;
				coin_num = 2;
			} else {
				if (bag_num == 2) {
					self.bag_info.visible = false;
					gray_false();
					counter = 0;
					bag_num = 1;
					coin_num = 0;
				} else {
					if (counter == 1) {
						coin_num = 2;
						overcoin_bus();
						gray_true();
						gray_play();
						func_off();
						self.coin_bus.mouseEnabled = true;
						self.coin_bus.removeEventListener("mouseover", overcoin_bus);
						self.coin_bus.removeEventListener("mouseout", outcoin_bus);
					} else {
						if (counter == 2) {
							coin_num = 0;
							outcoin_bus();
							gray_false();
							func_on();
							self.coin_bus.addEventListener("mouseover", overcoin_bus);
							self.coin_bus.addEventListener("mouseout", outcoin_bus);
							counter = 0;
						}
					}
				}
			}
		}
		//---------------------------------מים
		self.coin_water.addEventListener("mouseover", overcoin_water);
		self.coin_water.addEventListener("mouseout", outcoin_water);
		self.coin_water.addEventListener("click", clickcoin_water);
		self.coin_water.coin_txt.text = "מים";
		
		function overcoin_water() {
			coin_fade();
			bag_fade();
			self.coin_water.gotoAndStop(1);
			self.bag_home.gotoAndStop(1);
			self.bag_info.visible = true;
			self.bag_info.gotoAndStop(5);
		}
		
		function outcoin_water() {
			coin_basic();
			bag_basic();
			self.bag_info.visible = false;
		}
		
		function clickcoin_water() {
			counter++;
			self.gray_coin1.txt_gray.gray_txt.text = "סגרו את הברז";
			self.gray_coin2.txt_gray.gray_txt.text = "חסכם";
			self.gray_coin3.txt_gray.gray_txt.text = "ניצול המים הזורמים";
			self.gray_coin2.txt_gray.y = 25;
			self.gray_coin1.txt_gray.y = 20;
			if (bag_num == 1) {
				overcoin_water();
				gray_true();
				gray_play();
				self.coin_electric.gotoAndStop(1);
				self.coin_shop.gotoAndStop(1);
				self.coin_phon.gotoAndStop(1);
				bag_num++;
				coin_num = 3;
			} else {
				if (bag_num == 2) {
					self.bag_info.visible = false;
					gray_false();
					counter = 0;
					bag_num = 1;
					coin_num = 0;
				} else {
					if (counter == 1) {
						overcoin_water();
						coin_num = 3;
						gray_true();
						gray_play();
						func_off();
						self.coin_water.mouseEnabled = true;
						self.coin_water.removeEventListener("mouseover", overcoin_water);
						self.coin_water.removeEventListener("mouseout", outcoin_water);
					} else {
						if (counter == 2) {
							outcoin_water();
							coin_num = 0;
							gray_false();
							func_on();
							self.coin_water.addEventListener("mouseover", overcoin_water);
							self.coin_water.addEventListener("mouseout", outcoin_water);
							counter = 0;
						}
					}
				}
			}
		}
		
		//--------------------------------------- עשה זאת בעצך
		self.coin_diy.addEventListener("mouseover", overcoin_diy);
		self.coin_diy.addEventListener("mouseout", outcoin_diy);
		self.coin_diy.addEventListener("click", clickcoin_diy);
		self.coin_diy.coin_txt.text = "עשה זאת בעצמך";
		
		
		function overcoin_diy() {
			coin_fade();
			bag_fade();
			self.coin_diy.gotoAndStop(1);
			self.bag_daily.gotoAndStop(1);
			self.bag_info.visible = true;
			self.bag_info.gotoAndStop(6);
		}
		
		function outcoin_diy() {
			coin_basic();
			bag_basic();
			self.bag_info.visible = false;
		}
		
		function clickcoin_diy() {
			counter++;
			self.gray_coin1.txt_gray.gray_txt.text = "בעלי מקצוע";
			self.gray_coin2.txt_gray.gray_txt.text = "הכינו בבית";
			self.gray_coin3.txt_gray.gray_txt.text = "עיצוב הבית";
			self.gray_coin1.txt_gray.y = 25;
			self.gray_coin3.txt_gray.y = 25;
			self.gray_coin2.txt_gray.y = 25;
			if (bag_num == 1) {
				overcoin_diy();
				gray_true();
				gray_play();
				self.coin_bus.gotoAndStop(1);
				self.coin_shop.gotoAndStop(1);
				self.coin_change.gotoAndStop(1);
				bag_num++;
				coin_num = 4;
			} else {
				if (bag_num == 2) {
					self.bag_info.visible = false;
					gray_false();
					counter = 0;
					bag_num = 1;
					coin_num = 0;
				} else {
					if (counter == 1) {
						coin_num = 4;
						overcoin_diy();
						gray_true();
						gray_play();
						func_off();
						self.coin_diy.mouseEnabled = true;
						self.coin_diy.removeEventListener("mouseover", overcoin_diy);
						self.coin_diy.removeEventListener("mouseout", outcoin_diy);
					} else {
						if (counter == 2) {
							coin_num = 0;
							outcoin_diy();
							gray_false();
							func_on();
							self.coin_diy.addEventListener("mouseover", overcoin_diy);
							self.coin_diy.addEventListener("mouseout", outcoin_diy);
							counter = 0;
						}
					}
				}
			}
		}
		//-------------------------------------רכב
		self.coin_car.addEventListener("mouseover", overcoin_car);
		self.coin_car.addEventListener("mouseout", outcoin_car);
		self.coin_car.addEventListener("click", clickcoin_car);
		self.coin_car.coin_txt.text = "רכב";
		
		function overcoin_car() {
			coin_fade();
			bag_fade();
			self.coin_car.gotoAndStop(1);
			self.bag_daily.gotoAndStop(1);
			self.bag_luxury.gotoAndStop(1);
			self.bag_info.visible = true;
			self.bag_info.gotoAndStop(7);
		}
		
		function outcoin_car() {
			coin_basic();
			bag_basic();
			self.bag_info.visible = false;
		}
		
		function clickcoin_car() {
			self.gray_coin1.txt_gray.gray_txt.text = "בחירת הרכב המתאים";
			self.gray_coin2.txt_gray.gray_txt.text = "תחזוקת הרכב";
			self.gray_coin3.txt_gray.gray_txt.text = "בחירת הביטוח הנכון";
			self.gray_coin1.txt_gray.y = 20;
			self.gray_coin2.txt_gray.y = 20;
			self.gray_coin3.txt_gray.y = 15;
			counter++;
			if (mybag1 == 1) {
				overcoin_car();
				gray_true();
				gray_play();
				self.coin_fun.gotoAndStop(1);
				self.coin_member.gotoAndStop(1);
				mybag1++;
				coin_num = 5;
			} else {
				if (mybag1 == 2) {
					self.bag_info.visible = false;
					gray_false();
					counter = 0;
					mybag1 = 1;
					coin_num = 0;
				} else {
					if (mybag3 == 1) {
						overcoin_car();
						gray_true();
						gray_play();
						self.coin_bus.gotoAndStop(1);
						self.coin_diy.gotoAndStop(1);
						self.coin_shop.gotoAndStop(1);
						self.coin_change.gotoAndStop(1);
						coin_num = 5;
						mybag3++;
					} else {
						if (mybag3 == 2) {
							self.bag_info.visible = false;
							gray_false();
							counter = 0;
							mybag3 = 1;
							coin_num = 0;
						} else {
							if (counter == 1) {
								coin_num = 5;
								overcoin_car();
								gray_true();
								gray_play();
								func_off();
								self.coin_car.mouseEnabled = true;
								self.coin_car.removeEventListener("mouseover", overcoin_car);
								self.coin_car.removeEventListener("mouseout", outcoin_car);
							} else {
								if (counter == 2) {
									coin_num = 0;
									coin_basic();
									bag_basic();
									gray_false();
									self.bag_info.visible = false;
									self.coin_car.addEventListener("mouseover", overcoin_car);
									self.coin_car.addEventListener("mouseout", outcoin_car);
									counter = 0;
									func_on();
								}
							}
						}
					}
				}
			}
		}
		
		//-------------------------------בילויים
		self.coin_fun.addEventListener("mouseover", overcoin_fun);
		self.coin_fun.addEventListener("mouseout", outcoin_fun);
		self.coin_fun.addEventListener("click", clickcoin_fun);
		self.coin_fun.coin_txt.text = "בילויים";
		
		function overcoin_fun() {
			coin_fade();
			bag_fade();
			self.coin_fun.gotoAndStop(1);
			self.bag_luxury.gotoAndStop(1);
			self.bag_info.visible = true;
			self.bag_info.gotoAndStop(8);
		}
		
		function outcoin_fun() {
			coin_basic();
			bag_basic();
			self.bag_info.visible = false;
		}
		
		function clickcoin_fun() {
			self.gray_coin1.txt_gray.gray_txt.text = "השוואת מחירים";
			self.gray_coin2.txt_gray.gray_txt.text = "חפשו דיליים משתלמים";
			self.gray_coin3.txt_gray.gray_txt.text = "לא יותר מדי";
			self.gray_coin2.txt_gray.y = 20;
			self.gray_coin3.txt_gray.y = 25;
			self.gray_coin1.txt_gray.y = 20;
			counter++;
		
			if (bag_num == 1) {
				overcoin_fun();
				gray_true();
				gray_play();
				self.coin_car.gotoAndStop(1);
				self.coin_member.gotoAndStop(1);
				bag_num++
				coin_num = 6;
			} else {
				if (bag_num == 2) {
					self.bag_info.visible = false;
					gray_false();
					counter = 0;
					bag_num = 1;
					coin_num = 0;
				} else {
					if (counter == 1) {
						coin_num = 6;
						overcoin_fun();
						gray_true();
						gray_play();
						func_off();
						self.coin_fun.mouseEnabled = true;
						self.coin_fun.removeEventListener("mouseover", overcoin_fun);
						self.coin_fun.removeEventListener("mouseout", outcoin_fun);
					} else {
						if (counter == 2) {
							outcoin_fun();
							coin_num = 0;
							gray_false();
							self.coin_fun.addEventListener("mouseover", overcoin_fun);
							self.coin_fun.addEventListener("mouseout", outcoin_fun);
							counter = 0;
							func_on();
						}
					}
				}
			}
		}
		
		//-----------------------------------------תקשורת וסלולר
		self.coin_phon.addEventListener("mouseover", overcoin_phon);
		self.coin_phon.addEventListener("mouseout", outcoin_phon);
		self.coin_phon.addEventListener("click", clickcoin_phon);
		self.coin_phon.coin_txt.text = "תקשורת וסלולר";
		
		function overcoin_phon() {
			coin_fade();
			bag_fade();
			self.coin_phon.gotoAndStop(1);
			self.bag_home.gotoAndStop(1);
			self.bag_info.visible = true;
			self.bag_info.gotoAndStop(9);
		}
		
		function outcoin_phon() {
			coin_basic();
			bag_basic();
			self.bag_info.visible = false;
		}
		
		function clickcoin_phon() {
			counter++;
			self.gray_coin1.txt_gray.gray_txt.text = "חברה אחת תשתית אחת";
			self.gray_coin2.txt_gray.gray_txt.text = "השוואת מחירים";
			self.gray_coin3.txt_gray.gray_txt.text = "יד על הדופק";
			self.gray_coin1.txt_gray.y = 15;
			self.gray_coin2.txt_gray.y = 20;
			self.gray_coin3.txt_gray.y = 25;
			if (bag_num == 1) {
				overcoin_phon();
				gray_true();
				gray_play();
				self.coin_shop.gotoAndStop(1);
				self.coin_electric.gotoAndStop(1);
				self.coin_water.gotoAndStop(1)
				bag_num++;
				coin_num = 7;
			} else {
				if (bag_num == 2) {
					self.bag_info.visible = false;
					gray_false();
					counter = 0;
					bag_num = 1;
					coin_num = 0;
				} else {
					if (counter == 1) {
						coin_num = 7;
						overcoin_phon();
						gray_true();
						gray_play();
						func_off();
						self.coin_phon.mouseEnabled = true;
						self.coin_phon.removeEventListener("mouseover", overcoin_phon);
						self.coin_phon.removeEventListener("mouseout", outcoin_phon);
					} else {
						if (counter == 2) {
							coin_num = 0;
							outcoin_phon();
							gray_false();
							self.coin_phon.addEventListener("mouseover", overcoin_phon);
							self.coin_phon.addEventListener("mouseout", outcoin_phon);
							counter = 0;
							func_on();
		
						}
					}
				}
			}
		}
		//--------------------------------------------קניות
		self.coin_shop.addEventListener("mouseover", overcoin_shop);
		self.coin_shop.addEventListener("mouseout", outcoin_shop);
		self.coin_shop.addEventListener("click", clickcoin_shop);
		self.coin_shop.coin_txt.text = "קניות";
		
		function overcoin_shop() {
			coin_fade();
			bag_fade();
			self.coin_shop.gotoAndStop(1);
			self.bag_home.gotoAndStop(1);
			self.bag_daily.gotoAndStop(1);
			self.bag_info.visible = true;
			self.bag_info.gotoAndStop(10);
		}
		
		function outcoin_shop() {
			coin_basic();
			bag_basic();
			self.bag_info.visible = false;
		}
		
		function clickcoin_shop() {
			counter++;
			self.gray_coin1.txt_gray.gray_txt.text = "השוואת מחירים";
			self.gray_coin2.txt_gray.gray_txt.text = "קנו בצורה חכמה";
			self.gray_coin3.txt_gray.gray_txt.text = "!זהירות מבצעים";
			self.gray_coin1.txt_gray.y = 20;
			self.gray_coin2.txt_gray.y = 20;
			self.gray_coin3.txt_gray.y = 20;
			if (mybag2 == 1) {
				overcoin_shop();
				gray_true();
				gray_play();
				self.coin_phon.gotoAndStop(1);
				self.coin_electric.gotoAndStop(1);
				self.coin_water.gotoAndStop(1)
				mybag2++;
				coin_num = 8;
			} else {
				if (mybag2 == 2) {
					self.bag_info.visible = false;
					gray_false();
					counter = 0;
					mybag2 = 1;
					coin_num = 0;
				} else {
					if (mybag3 == 1) {
						overcoin_shop();
						gray_true();
						gray_play();
						self.coin_bus.gotoAndStop(1);
						self.coin_diy.gotoAndStop(1);
						self.coin_car.gotoAndStop(1);
						self.coin_change.gotoAndStop(1);
						mybag2++;
						coin_num = 8;
					} else {
						if (mybag3 == 2) {
							self.bag_info.visible = false;
							gray_false();
							counter = 0;
							mybag3 = 1;
							coin_num = 0;
						} else {
							if (counter == 1) {
								coin_num = 8;
								overcoin_shop();
								gray_true();
								gray_play();
								func_off();
								self.coin_shop.mouseEnabled = true;
								self.coin_shop.removeEventListener("mouseover", overcoin_shop);
								self.coin_shop.removeEventListener("mouseout", outcoin_shop);
							} else {
								if (counter == 2) {
									coin_num = 0;
									outcoin_shop();
									gray_false();
									self.coin_shop.addEventListener("mouseout", outcoin_shop);
									counter = 0;
									func_on();
								}
							}
						}
					}
				}
			}
		}
		
		
		//----------------------------------------כסף קטן
		self.coin_change.addEventListener("mouseover", overcoin_change);
		self.coin_change.addEventListener("mouseout", outcoin_change);
		self.coin_change.addEventListener("click", clickcoin_change);
		self.coin_change.coin_txt.text = "כסף קטן";
		
		
		function overcoin_change() {
			coin_fade();
			bag_fade();
			self.coin_change.gotoAndStop(1);
			self.bag_daily.gotoAndStop(1);
			self.bag_info.visible = true;
			self.bag_info.gotoAndStop(11);
		}
		
		function outcoin_change() {
			coin_basic();
			bag_basic();
			self.bag_info.visible = false;
		}
		
		function clickcoin_change() {
			counter++;
			self.gray_coin1.txt_gray.gray_txt.text = "קנסות על הוצאות";
			self.gray_coin2.txt_gray.gray_txt.text = "כסף כיס";
			self.gray_coin3.txt_gray.gray_txt.text = "מעשים טובים";
			self.gray_coin2.txt_gray.y = 25;
			self.gray_coin1.txt_gray.y = 20;
			self.gray_coin3.txt_gray.y = 20;
		
			if (bag_num == 1) {
				overcoin_change();
				gray_true();
				gray_play();
				self.coin_shop.gotoAndStop(1);
				self.coin_diy.gotoAndStop(1);
				self.coin_bus.gotoAndStop(1)
				bag_num++;
				coin_num = 9;
			} else {
				if (bag_num == 2) {
					self.bag_info.visible = false;
					gray_false();
					counter = 0;
					bag_num = 1;
					coin_num = 0;
				} else {
					if (counter == 1) {
						coin_num = 9;
						overcoin_change();
						gray_true();
						gray_play();
						func_off();
						self.coin_change.mouseEnabled = true;
						self.coin_change.removeEventListener("mouseout", outcoin_change);
						self.coin_change.removeEventListener("mouseover", overcoin_change);
					} else {
						if (counter == 2) {
							coin_num = 0;
							outcoin_change();
							gray_false();
							self.coin_change.addEventListener("mouseout", outcoin_change);
							self.coin_change.addEventListener("mouseover", overcoin_change);
							counter = 0;
							func_on();
						}
					}
				}
			}
		}
		
		//------------------------------------------------מנויים
		
		self.coin_member.addEventListener("mouseover", overcoin_member);
		self.coin_member.addEventListener("mouseout", outcoin_member);
		self.coin_member.addEventListener("click", clickcoin_member);
		self.coin_member.coin_txt.text = "מנויים";
		
		function overcoin_member() {
			coin_fade();
			bag_fade();
			self.coin_member.gotoAndStop(1);
			self.bag_luxury.gotoAndStop(1);
			self.bag_info.visible = true;
			self.bag_info.gotoAndStop(12);
		}
		
		function outcoin_member() {
			coin_basic();
			bag_basic();
			self.bag_info.visible = false;
		}
		
		function clickcoin_member() {
			counter++;
			self.gray_coin1.txt_gray.gray_txt.text = "השוואת מחירים";
			self.gray_coin2.txt_gray.gray_txt.text = "איפה שווה לי";
			self.gray_coin3.txt_gray.gray_txt.text = "הוצאה משתלמת";
			self.gray_coin2.txt_gray.y = 25;
			self.gray_coin1.txt_gray.y = 20;
			self.gray_coin3.txt_gray.y = 20;
		
			if (bag_num == 1) {
				overcoin_member();
				gray_true();
				gray_play();
				self.coin_car.gotoAndStop(1);
				self.coin_fun.gotoAndStop(1);
				bag_num++;
				coin_num = 10;
			} else {
				if (bag_num == 2) {
					self.bag_info.visible = false;
					gray_false();
					counter = 0;
					bag_num = 1;
					coin_num = 0;
				} else {
					if (counter == 1) {
						coin_num = 10;
						overcoin_member();
						gray_true();
						gray_play();
						func_off();
						self.coin_member.mouseEnabled = true;
						self.coin_member.removeEventListener("mouseout", outcoin_member);
						self.coin_member.removeEventListener("mouseover", overcoin_member);
		
					} else {
						if (counter == 2) {
							coin_num = 0;
							outcoin_member();
							gray_false();
							self.coin_member.addEventListener("mouseout", outcoin_member);
							counter = 0;
							func_on();
						}
					}
				}
			}
		}
		
		//------------------------מטבעות אפורים
		self.gray_coin1.addEventListener("mouseover", over_gray_coin1); //פונקצית מעבר עכבר על המטבע האפור הראשון
		self.gray_coin2.addEventListener("mouseover", over_gray_coin2); //פונקצית מעבר עכבר על המטבע האפור השני
		self.gray_coin3.addEventListener("mouseover", over_gray_coin3); //פונקצית מעבר עכבר על המטבע האפור השלישי
		self.gray_coin1.addEventListener("mouseout", outgray_coin1); // יציאה ממעבר עכבר של המטבע האפור הראשון
		self.gray_coin2.addEventListener("mouseout", outgray_coin2); // יציאה ממעבר עכבר של המטבע האפור השני
		self.gray_coin3.addEventListener("mouseout", outgray_coin3); // יציאה ממעבר עכבר של המטבע האפור השלישי
		self.gray_coin1.addEventListener("click", clickgray_coin1);
		self.gray_coin2.addEventListener("click", clickgray_coin2);
		self.gray_coin3.addEventListener("click", clickgray_coin3);
		
		function over_gray_coin1() {
			self.gray_coin1.gotoAndStop(12);
		}
		
		function outgray_coin1() {
			self.gray_coin1.gotoAndStop(11);
		}
		
		function over_gray_coin2() {
			self.gray_coin2.gotoAndStop(12);
		}
		
		function outgray_coin2() {
			self.gray_coin2.gotoAndStop(11);
		}
		
		function over_gray_coin3() {
			self.gray_coin3.gotoAndStop(12);
		}
		
		function outgray_coin3() {
			self.gray_coin3.gotoAndStop(11);
		}
		
		function clickgray_coin1() {
			self.big_coin.visible = true;
			self.black_x.visible = true;
		
			if (coin_num == 1) {
				self.big_coin.gotoAndPlay(0);
			} else {
				if (coin_num == 2) {
					self.big_coin.gotoAndPlay(27);
				} else {
					if (coin_num == 3) {
						self.big_coin.gotoAndPlay(63);
					} else {
						if (coin_num == 4) {
							self.big_coin.gotoAndPlay(81);
						} else {
							if (coin_num == 5) {
								self.big_coin.gotoAndPlay(117);
							} else {
								if (coin_num == 6) {
									self.big_coin.gotoAndPlay(144);
								} else {
									if (coin_num == 7) {
										self.big_coin.gotoAndPlay(171);
									} else {
										if (coin_num == 8) {
											self.big_coin.gotoAndPlay(189);
										} else {
											if (coin_num == 9) {
												self.big_coin.gotoAndPlay(225);
											} else {
												if (coin_num == 10) {
													self.big_coin.gotoAndPlay(252);
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		
		function clickgray_coin2() {
			self.big_coin.visible = true;
			self.black_x.visible = true;
			if (coin_num == 1) {
				self.big_coin.gotoAndPlay(18);
			} else {
				if (coin_num == 2) {
					self.big_coin.gotoAndPlay(36);
				} else {
					if (coin_num == 3) {
						self.big_coin.gotoAndPlay(54);
					} else {
						if (coin_num == 4) {
							self.big_coin.gotoAndPlay(90);
						} else {
							if (coin_num == 5) {
								self.big_coin.gotoAndPlay(108);
							} else {
								if (coin_num == 6) {
									self.big_coin.gotoAndPlay(135);
								} else {
									if (coin_num == 7) {
										self.big_coin.gotoAndPlay(162);
									} else {
										if (coin_num == 8) {
											self.big_coin.gotoAndPlay(198);
										} else {
											if (coin_num == 9) {
												self.big_coin.gotoAndPlay(216);
											} else {
												if (coin_num == 10) {
													self.big_coin.gotoAndPlay(243);
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		
		function clickgray_coin3() {
			self.big_coin.visible = true;
			self.black_x.visible = true;
			if (coin_num == 1) {
				self.big_coin.gotoAndPlay(9);
			} else {
				if (coin_num == 2) {
					self.big_coin.gotoAndPlay(45);
				} else {
					if (coin_num == 3) {
						self.big_coin.gotoAndPlay(72);
					} else {
						if (coin_num == 4) {
							self.big_coin.gotoAndPlay(99);
						} else {
							if (coin_num == 5) {
								self.big_coin.gotoAndPlay(126);
							} else {
								if (coin_num == 6) {
									self.big_coin.gotoAndPlay(153);
								} else {
									if (coin_num == 7) {
										self.big_coin.gotoAndPlay(180);
									} else {
										if (coin_num == 8) {
											self.big_coin.gotoAndPlay(207);
										} else {
											if (coin_num == 9) {
												self.big_coin.gotoAndPlay(234);
											} else {
												if (coin_num == 10) {
													self.big_coin.gotoAndPlay(261);
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		
		
		self.black_x.addEventListener("click", clickblack_x);
		
		function clickblack_x() {
			self.big_coin.visible = false;
			self.black_x.visible = false;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// big_coin
	this.black_x = new lib.blak_x();
	this.black_x.setTransform(930.4,-24.9,1.788,1.788,0,0,0,48.1,-95);

	this.big_coin = new lib.coin_info();
	this.big_coin.setTransform(561.6,468.85,1.788,1.788,0,0,0,-22.4,47.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.big_coin},{t:this.black_x}]}).wait(1));

	// buttons
	this.pink_x = new lib.pink_x();
	this.pink_x.setTransform(1043.3,146.85,1.6118,1.6118,0,0,0,0.6,0.1);
	this.pink_x.shadow = new cjs.Shadow("rgba(102,102,102,1)",3,3,4);
	this.pink_x.cache(-26,-27,54,54);

	this.blue_x = new lib.blue_x();
	this.blue_x.setTransform(289.7,54.25,1.788,1.788);

	this.instance = new lib.title();
	this.instance.setTransform(688.05,212.15,1.788,1.788);

	this.instruction = new lib.Instructions();
	this.instruction.setTransform(144.75,59.8,1.788,1.788,0,0,0,2.6,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instruction},{t:this.instance},{t:this.blue_x},{t:this.pink_x}]}).wait(1));

	// about_us
	this.HIT = new lib.logohit();
	this.HIT.setTransform(673.1,489.1,0.2407,0.2357,0,0,0,176.8,118.8);

	this.about_us = new lib.about_us2();
	this.about_us.setTransform(147.05,152.2,1.5199,1.5199,0,0,0,0.6,0.1);
	this.about_us.shadow = new cjs.Shadow("rgba(153,153,153,1)",3,3,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.about_us},{t:this.HIT}]}).wait(1));

	// info_bag_coin
	this.coin_phon = new lib.coin_long();
	this.coin_phon.setTransform(452,654.2,1.788,1.788,0,0,0,229.9,84);

	this.coin_bus = new lib.coin_long();
	this.coin_bus.setTransform(1047.2,654.2,1.788,1.788,0,0,0,230,84);

	this.coin_diy = new lib.coin_long();
	this.coin_diy.setTransform(809.2,654.2,1.788,1.788,0,0,0,230,84);

	this.bag_info = new lib.bag_info();
	this.bag_info.setTransform(1378.75,436.55,1.788,1.788,0,0,0,365.5,-73.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bag_info},{t:this.coin_diy},{t:this.coin_bus},{t:this.coin_phon}]}).wait(1));

	// pig
	this.gray_coin1 = new lib.graycoin();
	this.gray_coin1.setTransform(587.5,333.65,1.788,1.788,0,0,0,-33,12.8);

	this.gray_coin3 = new lib.graycoin();
	this.gray_coin3.setTransform(641.7,430.75,1.788,1.788,0,0,0,-33,12.8);

	this.gray_coin2 = new lib.graycoin();
	this.gray_coin2.setTransform(587.5,408.05,1.788,1.788,0,0,0,0.6,0.1);

	this.instance_1 = new lib.pig();
	this.instance_1.setTransform(606.85,428.8,0.7922,0.7922,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.gray_coin2},{t:this.gray_coin3},{t:this.gray_coin1}]}).wait(1));

	// coin1
	this.coin_change = new lib.coin_change();
	this.coin_change.setTransform(214,654.2,1.788,1.788,0,0,0,229.9,84);

	this.coin_member = new lib.coin1();
	this.coin_member.setTransform(136.15,636.3,1.788,1.788,0,0,0,252.9,74);

	this.coin_shop = new lib.coin1();
	this.coin_shop.setTransform(374.3,636.3,1.788,1.788,0,0,0,253,74);

	this.coin_fun = new lib.coin1();
	this.coin_fun.setTransform(612.3,636.3,1.788,1.788,0,0,0,253,74);

	this.coin_car = new lib.coin1();
	this.coin_car.setTransform(731.3,636.3,1.788,1.788,0,0,0,253,74);

	this.coin_water = new lib.coin1();
	this.coin_water.setTransform(969.3,636.3,1.788,1.788,0,0,0,253,74);

	this.coin_electric = new lib.coin1();
	this.coin_electric.setTransform(905.2,657.6,1.788,1.788,0,0,0,84,85.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.coin_electric},{t:this.coin_water},{t:this.coin_car},{t:this.coin_fun},{t:this.coin_shop},{t:this.coin_member},{t:this.coin_change}]}).wait(1));

	// money_bag3
	this.bag_daily = new lib.money_bag1();
	this.bag_daily.setTransform(459.9,119.75,1.788,1.788,0,0,0,381,1623.5);

	this.timeline.addTween(cjs.Tween.get(this.bag_daily).wait(1));

	// money_bag2
	this.bag_home = new lib.money_bag1();
	this.bag_home.setTransform(669.2,119.75,1.788,1.788,0,0,0,381.1,1623.5);

	this.timeline.addTween(cjs.Tween.get(this.bag_home).wait(1));

	// money_bag1
	this.bag_luxury = new lib.money_bag1();
	this.bag_luxury.setTransform(767.45,137.65,1.788,1.788,0,0,0,319.1,1633.5);

	this.timeline.addTween(cjs.Tween.get(this.bag_luxury).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(650.3,369.9,583,330.5);
// library properties:
lib.properties = {
	id: '56057B7B89D6884F84B7977AD87AAB3B',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/piggi bank_atlas_.png?1594035201951", id:"piggi bank_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['56057B7B89D6884F84B7977AD87AAB3B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;