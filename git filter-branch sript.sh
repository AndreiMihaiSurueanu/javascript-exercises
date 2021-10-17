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
