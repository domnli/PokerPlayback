<?php
class Poker {
	public $xmlObject;
	public $xmlString;
	public function __construct($xmlFileName) {
		if (file_exists($xmlFileName)) {
			
			$this->xmlString = file_get_contents($xmlFileName);
			$this->xmlObject = simplexml_load_string($this->xmlString);
			if ($this->xmlObject === false) {
				throw new Exception('not xml file');
			}
		}else{
			throw new Exception('file not found');
		}
	}


	private function parsePOKERCARD() {
		preg_match("/<POKERCARD>(.*)<\/POKERCARD>/s", $this->xmlString, $pokercard);
		preg_match("/<POKERCARD>(.*)<FLOP>/s", $pokercard[0], $preflop);
		preg_match("/<\/FLOP>(.*)<TURN>/s", $pokercard[0], $flop);
		preg_match("/<\/TURN>(.*)<RIVER>/s", $pokercard[0], $turn);
		preg_match("/<\/RIVER>(.*)<\/POKERCARD>/s", $pokercard[0], $river);
		//print_r($pokercard);
		$countPreflop = preg_match_all("/<PLAYER>/", $preflop[0], $m1);
		$countFlop = preg_match_all("/<PLAYER>/", $flop[0], $m2);
		$countTurn = preg_match_all("/<PLAYER>/", $turn[0], $m3);
		$countRiver = preg_match_all("/<PLAYER>/", $river[0], $m4);
		//print_r($flop);
		//echo ($flop[0])
		$noseq = json_decode(json_encode($this->xmlObject->STAGE->POKERCARD),true);
		$playerPool = $noseq['PLAYER'];
		$export = array(
						'HOLECARD' => $noseq['HOLECARD'],
						'PREFLOP' => array('PLAYER' => array()),
						'FLOP' => array(
										'CARD' => $noseq['FLOP']['CARD'],
										'POT' => $noseq['FLOP']['POT'],
										'PLAYER' => array()
									),
						'TURN' => array(
										'CARD' => $noseq['TURN']['CARD'],
										'POT' => $noseq['TURN']['POT'],
										'PLAYER' => array()
									),
						'RIVER' => array(
										'CARD' => $noseq['RIVER']['CARD'],
										'POT' => $noseq['RIVER']['POT'],
										'PLAYER' => array()
									),
					);
		//print_r($export);
		//echo count($playerPool);
		$export['PREFLOP']['PLAYER'] = array_splice($playerPool, 0, $countPreflop);
		$export['FLOP']['PLAYER'] = array_splice($playerPool, 0, $countFlop);
		$export['TURN']['PLAYER'] = array_splice($playerPool, 0, $countTurn);
		$export['RIVER']['PLAYER'] = array_splice($playerPool, 0, $countRiver);
		//echo count($playerPool);
		//print_r($export);
		return $export;
	}

	public function exportJSON() {
		/*foreach ($this->xmlObject as $key => $value) {
			echo "$key".'<br/>----------------------------------------------';
			var_dump($value);
		}*/
/*		$pokerArr = array(
						'stage' => array(
										'title' => $this->xmlObject->STAGE->TITLE,
										'id' => $this->xmlObject->STAGE->ID,
										'time' => $this->xmlObject->STAGE->TIME,
										'table' => array(),
										'pokercard' => array(
															'holecard' => array(),
															'preflop' => array(),
															'flop' => array(),
															'turn' => array(),
															'river' => array()
														),
										'showdown' => array()
									)
					);*/
		$pokerArr = json_decode(json_encode($this->xmlObject),true);
		$pokerArr['STAGE']['POKERCARD'] = $this->parsePOKERCARD();
		//print_r($pokerArr);
		return json_encode($pokerArr);
	}
}

$poker = new Poker('handhistory2.xml');
echo $poker->exportJSON();