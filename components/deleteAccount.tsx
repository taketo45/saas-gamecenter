'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Trash2, Loader2 } from 'lucide-react';
import { startTransition, useActionState } from 'react';
import { deleteAccount } from '@/app/(login)/actions';

type ActionState = {
  error?: string;
  success?: string;
};

export default function DeleteAccount() {

  const [deleteState, deleteAction, isDeletePending] = useActionState<
    ActionState,
    FormData
  >(deleteAccount, { error: '', success: '' });


  const handleDeleteSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    startTransition(() => {
      deleteAction(new FormData(event.currentTarget));
    });
  };

  return (
      <Card>
        <CardHeader>
          <CardTitle>アカウントの削除</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 mb-4">
            アカウントを削除すると元に戻せません。ご注意ください。
          </p>
          <form onSubmit={handleDeleteSubmit} className="space-y-4">
            <div>
              <Label htmlFor="delete-password">確認のためログインパスワードを入力</Label>
              <Input
                id="delete-password"
                name="password"
                type="password"
                required
                minLength={8}
                maxLength={100}
              />
            </div>
            {deleteState.error && (
              <p className="text-red-500 text-sm">{deleteState.error}</p>
            )}
            <Button
              type="submit"
              variant="destructive"
              className="bg-red-600 hover:bg-red-700"
              disabled={isDeletePending}
            >
              {isDeletePending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  削除中...
                </>
              ) : (
                <>
                  <Trash2 className="mr-2 h-4 w-4" />
                  アカウントの削除
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
  );
}
