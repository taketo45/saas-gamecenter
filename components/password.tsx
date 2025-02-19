'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Lock, Loader2 } from 'lucide-react';
import { startTransition, useActionState } from 'react';
import { updatePassword } from '@/app/(login)/actions';

type ActionState = {
  error?: string;
  success?: string;
};

export default function Password() {
  const [passwordState, passwordAction, isPasswordPending] = useActionState<
    ActionState,
    FormData
  >(updatePassword, { error: '', success: '' });


  const handlePasswordSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    // If you call the Server Action directly, it will automatically
    // reset the form. We don't want that here, because we want to keep the
    // client-side values in the inputs. So instead, we use an event handler
    // which calls the action. You must wrap direct calls with startTransition.
    // When you use the `action` prop it automatically handles that for you.
    // Another option here is to persist the values to local storage. I might
    // explore alternative options.
    startTransition(() => {
      passwordAction(new FormData(event.currentTarget));
    });
  };


  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>パスワード</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handlePasswordSubmit}>
          <div>
            <Label htmlFor="current-password">現在のパスワード</Label>
            <Input
              id="current-password"
              name="currentPassword"
              type="password"
              autoComplete="current-password"
              required
              minLength={8}
              maxLength={100}
            />
          </div>
          <div>
            <Label htmlFor="new-password">新しいパスワード</Label>
            <Input
              id="new-password"
              name="newPassword"
              type="password"
              autoComplete="new-password"
              required
              minLength={8}
              maxLength={100}
            />
          </div>
          <div>
            <Label htmlFor="confirm-password">新しいパスワード 確認</Label>
            <Input
              id="confirm-password"
              name="confirmPassword"
              type="password"
              required
              minLength={8}
              maxLength={100}
            />
          </div>
          {passwordState.error && (
            <p className="text-red-500 text-sm">{passwordState.error}</p>
          )}
          {passwordState.success && (
            <p className="text-green-500 text-sm">{passwordState.success}</p>
          )}
          <Button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white"
            disabled={isPasswordPending}
          >
            {isPasswordPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Updating...
              </>
            ) : (
              <>
                <Lock className="mr-2 h-4 w-4" />
                パスワードを更新
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
