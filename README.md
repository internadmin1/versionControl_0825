# versionControl_0825
1dayインターン バージョン管理

### 作業手順
#masterブランチに切り変える
git checkout master

#masterブランチを最新状態にする
git pull

#新しいpagename_user1ブランチに切り替える
git checkout -b pagename_user1

#ファイル編集とか、コード追加とか作業

#変更をすべてステージングする
git add .　　

#コミット作成
git commit -m "コミットメッセージ"

#コミット送信　
git push origin pagename_user1

# PR作成
