git filter-repo --commit-filter '
    if [ "$GIT_COMMITTER_EMAIL" = "<email@a>" ];
    then
            # Set the new desired email
            GIT_COMMITTER_EMAIL="<git1@email.com>";
            GIT_AUTHOR_EMAIL="<git1@email.com>";

            # (re) commit with the updated information
            git commit-tree "$@";
    else
            # No need to update so commit as is
            git commit-tree "$@";
    fi' 
HEAD

# git rebase -i HEAD~10 -x "git commit --amend --author 'andrei <git1@email.com>' --no-edit"
# git rebase -i --root -x "git commit --amend --author 'andrei <git1@email.com>' --no-edit"
# git rebase -i --root -x "git commit --amend --date='Wed Feb 16 14:00 2011 +0100' --no-edit"
# git rebase -i aed76f1 master -x "GIT_COMMITTER_DATE='Mon Oct 18 14:00 2021 +0100' git commit --amend --date --no-edit"
# git rebase -i aed76f1 master -x "GIT_COMMITTER_DATE='2020-09-22' git commit --amend --date='2020-09-22' --no-edit"
# git rebase -i --root -x "GIT_COMMITTER_DATE='2021-02-09 12:00:00' git commit --amend --date='2021-02-09 12:00:00' --no-edit"
# git rebase -i --root -x "GIT_COMMITTER_DATE='2021-03-17 10:09:41' git commit --amend --date='2021-03-17 10:09:41' --no-edit"

# firebase deploy --only hosting
# firebase deploy --only hosting:site-name (e.g. firebase deploy --only hosting:linkedin-clone9)

# Undoing Your Last Commit (That Has Not Been Pushed)
# git reset --soft HEAD~
