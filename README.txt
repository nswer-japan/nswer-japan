原因
- 画像の壊れたアイコンは、ブラウザが images/world-map-base.svg を読めていない状態です。
- よくある原因は、images フォルダに入っていない / ファイル名違い / 大文字小文字違いです。

今回の修正版
- ベース地図を SVG ではなく PNG に変更
- schedule.html の参照先も images/world-map-base.png に変更

やること
- schedule.html を上書き
- images/world-map-base.png を images フォルダに入れる
