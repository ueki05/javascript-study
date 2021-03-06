# 10-6-2 DOM Level 3 で定義されているイベント

## イベント分類
- UIEvent
- FocusEvent
- MouseEvent
- WheelEvent
- TextEvent
- KeyboardEvent
- CompositionEvent

## Level 3 UIEvent一覧
| イベントタイプ | 発火タイミング                                    |
|----------------|---------------------------------------------------|
| DOMActivate    | 要素が活性化された（非推奨。clickイベントを使う） |
| load           | 文書のロードが完了した                            |
| unload         | 文書がアンロードされた（ページ遷移したときなど）  |
| abort          | 画像の読み込みが中断された                        |
| error          | エラーが起きた                                    |
| select         | input要素やtextarea要素でテキストが選択された     |
| resize         | ウィンドウサイズが変更された                      |
| scroll         | 要素がスクロールした                              |

## Level 3 FocusEvent一覧
| イベントタイプ    | 発火タイミング                                                       |
|-------------------|----------------------------------------------------------------------|
| focus             | 要素がフォーカスを得た                                               |
| blur              | 要素がフォーカスを失った                                             |
| focusin           | 要素がフォーカスを得た                                               |
| focusout          | 要素がフォーカスを失った                                             |
| DOMFocusin        | 要素がフォーカスを得た（非推奨。focusまたはfocusinイベントを使う）   |
| DOMFocusOut       | 要素がフォーカスを失った（非推奨。blurまたはfocusoutイベントを使う） |

## Level 3 MouseEvent一覧
| イベントタイプ    | 発火タイミング                                                       |
|-------------------|----------------------------------------------------------------------|
| click             | 要素がクリックされた                                                 |
| dblclick          | 要素がダブルクリックされた                                           |
| mousedown         | マウスボタンが要素上で押下された                                     |
| ouseup            | 押下されていたボタンが要素上で放された                               |
| mouseenter        | マウスポインタが要素の上に乗った                                     |
| mouseleave        | マウスポインタが要素の上から離れた                                   |
| mouseover         | マウスポインタが要素の上に乗った                                     |
| mouseout          | マウスポインタが要素の上から離れた                                   |
| mousemove         | マウスポインタが要素の上を移動した                                   |

## Level 3 WheelEvent一覧
| イベントタイプ    | 発火タイミング                                                       |
|-------------------|----------------------------------------------------------------------|
| wheel             | マウスホイールが回された                                             |

## Level 3 TextEvent一覧
| イベントタイプ    | 発火タイミング                                                       |
|-------------------|----------------------------------------------------------------------|
| textinput         | 文字が入力された                                                     |

## Level 3 KeyboardEvent一覧
| イベントタイプ    | 発火タイミング                                                       |
|-------------------|----------------------------------------------------------------------|
| keydown           | キーが押下された                                                     |
| keypress          | キーが押下されて文字が入力された                                     |
| keypup            | 押下されていたキーが離された                                         |

## Level 3 CompositionEvent一覧
| イベントタイプ    | 発火タイミング                                                       |
|-------------------|----------------------------------------------------------------------|
| compositionstart  | IMEで変換を開始した                                                  |
| compositionupdate | IMEで変換候補を選択した                                              |
| compositionend    | IMEで変換を確定した                                                  |

## マウスポインタの移動中に発火するイベントの順序
1. mouseover
2. mouseenter
3. mousemove
4. mouseout
5. mouseleave

## ダブルクリック時に発火するイベントの順序
1. mousedown
2. mousemove (必要があれば)
3. mouseup
4. click
5. mousemove (必要があれば)
6. mousedown
7. mousemove (必要があれば)
8. mouseup
9. click
10. dblckick

# Chrome Developer Toolsについて
## 使えそうなサイト
- https://www.buildinsider.net/web/chromedevtools/01
- https://dotinstall.com/lessons/basic_chrome_dev_v2
